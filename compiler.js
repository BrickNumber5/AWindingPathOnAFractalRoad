console.log( "Started compiler.js" );

const fs = require( "fs" );

const re = /^(.+)\.textgenerator\.custommarkup$/;

let srcFiles = fs.readdirSync( "./src" ).filter( f => re.test( f ) );

srcFiles.forEach( ( file, i ) => compileFile( re.exec( file )[ 1 ], i, srcFiles.length ) );

function compileFile( name, num = 0, max = 1 ) {
  const srcFileName = `./src/${ name }.textgenerator.custommarkup`;
  const resFileName = `./build/${ name }.textgenerator.js`;
  const dotFileName = `./debug/${ name }.textgenerator.dot`;
  console.log( `Processing ${ name }          [${ num + 1 }/${ max }]` );
  console.log( `Reading ${ srcFileName }` );
  const srcFile = fs.readFileSync( srcFileName ).toString( ).replace( /\r\n/g, "\n" );
  console.log( `Compiling` );
  const { resFile, dotFile } = compile( name, srcFile );
  console.log( `Writing ${ resFileName }` );
  try {
    fs.unlinkSync( resFileName );
  } catch ( e ) {
    // Do nothing, if it errors that just means the file doesn't exist.
  }
  fs.writeFileSync( resFileName, resFile );
  console.log( `Writing ${ dotFileName }` );
  try {
    fs.unlinkSync( dotFileName );
  } catch ( e ) {
    // Do nothing, if it errors that just means the file doesn't exist.
  }
  fs.writeFileSync( dotFileName, dotFile );
}

function compile( name, srcFile ) {
  let parsed = parse( srcFile );
  
  let res = "";
  res += 'import * as template from "./template.textgenerator.js"\n\n';
  res += "const { TOKEN } = template;\n\n";
  
  if ( parsed.variables.length > 0 ) {
    res += `let ${ parsed.variables.join( ' = "", ' ) } = "";\n\n`;
    res += `function reset( ) {\n  ${ parsed.variables.join( ' = "";\n  ' ) } = "";\n}\n\n`
  }
  
  for ( let i = 0; i < parsed.functions.length; i++ ) {
    const { name, tokens } = parsed.functions[ i ];
    res += `function* ${ name }( ) {\n`;
    for ( let j = 0; j < tokens.length; j++ ) {
      const { type, data } = tokens[ j ];
      if ( type === "page_start" ) {
        res += "  yield TOKEN.PAGE_START;\n";
      } else if ( type === "page_end" ) {
        res += "  yield TOKEN.PAGE_END;\n";
      } else if ( type === "paragraph_start" ) {
        res += `  yield [ TOKEN.PARA_START, ${ data.toString( ) } ];\n`;
      } else if ( type === "paragraph_end" ) {
        res += "  yield TOKEN.PARA_END;\n";
      } else if ( type === "title" ) {
        res += `  yield [ TOKEN.TITLE, ${ JSON.stringify( data ) } ];\n`;
      } else if ( type === "text" ) {
        res += `  yield [ TOKEN.TEXT, ${ JSON.stringify( data ) } ];\n`;
      } else if ( type === "bold_start" ) {
        res += "  yield TOKEN.BOLD_START;\n";
      } else if ( type === "bold_end" ) {
        res += "  yield TOKEN.BOLD_END;\n";
      } else if ( type === "italic_start" ) {
        res += "  yield TOKEN.ITALIC_START;\n";
      } else if ( type === "italic_end" ) {
        res += "  yield TOKEN.ITALIC_END;\n";
      } else if ( type === "underline_start" ) {
        res += "  yield TOKEN.UNDERLINE_START;\n";
      } else if ( type === "underline_end" ) {
        res += "  yield TOKEN.UNDERLINE_END;\n";
      } else if ( type === "striked_start" ) {
        res += "  yield TOKEN.STRIKED_START;\n";
      } else if ( type === "striked_end" ) {
        res += "  yield TOKEN.STRIKED_END;\n";
      } else if ( type === "blank_mc" ) {
        res += `  yield [ TOKEN.BLANK_MC, [ ${
          data.options.map( o => JSON.stringify( o ) ).join( ", " )
        } ], __$result => { ${ data.reference } = __$result; }, ( ) => ${ data.reference } ];\n`;
      } else if ( type === "blank_sa" ) {
        res += `  yield [ TOKEN.BLANK_SA, ${
          JSON.stringify( data.length )
        }, __$result => { ${ data.reference } = __$result; }, ( ) => ${ data.reference } ];\n`;
      } else if ( type === "jump" ) {
        if ( data === "END" ) {
          res += `  return TOKEN.END\n`;
        } else {
          res += `  yield* ${ data }( );\n  return TOKEN.END;\n`;
        }
      } else if ( type === "conditional_jump" ) {
        res += "  " + data.branches.map(
          b => ( b.choice === "" ? "" : `if ( ${ data.reference } === ${ JSON.stringify( b.choice ) } ) ` ) + `{\n${
            b.goesto === "END" ? "" :  `    yield* ${ b.goesto }( );\n`
          }    return TOKEN.END;\n  }`
        ).join( " else " ) + ( data.branches.filter( b => b.choice === "" ).length > 0 ? "\n" : " else {\n    return TOKEN.END;\n  }\n" );
      } else {
        console.log( res );
        console.log( type );
        throw "!";
      }
    }
    res += "}\n\n";
  }
  
  res += `export default new template.TextGenerator( START${ parsed.variables.length > 0 ? ", reset" : "" } );`;
  
  return { resFile: res, dotFile: generateDotFile( name, parsed ) };
}

function parse( srcFile ) {
  let tokens = [ { type: "reference", data: "START" } ];
  // Tokenize
  let sol = true, bold = false, ital = false, undr = false, strk = false, txt = "";
  let i = 0;
  while ( i < srcFile.length ) {
    if ( sol && srcFile[ i ] === "#" && srcFile[ i + 1 ] === " " ) {
      i += 2;
      let chr = srcFile[ i ];
      i++;
      if ( chr === "!" ) {
        i++;
        let title = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          title += srcFile[ i ];
          i++;
        }
        i++;
        tokens.push( { type: "title", data: title } );
      } else if ( chr === '"' ) {
        i++;
        let comment = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          comment += srcFile[ i ];
          i++;
        }
        i++;
        tokens.push( { type: "comment", data: comment } );
      } else if ( chr === "@" ) {
        let reference = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          reference += srcFile[ i ];
          i++;
        }
        i++;
        tokens.push( { type: "reference", data: reference } );
      } else if ( chr === "-" && srcFile[ i ] === "-" && srcFile[ i + 1 ] === "-" && srcFile[ i + 2 ] === "\n" ) {
        i += 3;
        tokens.push( { type: "next_page", data: false } );
      } else if ( chr === "." && srcFile[ i ] === "." && srcFile[ i + 1 ] === "." && srcFile[ i + 2 ] === "\n" ) {
        i += 3;
        tokens.push( { type: "next_page", data: true } );
      } else if ( chr === "-" && srcFile[ i ] === ">" && srcFile[ i + 1 ] === " " && srcFile[ i + 2 ] === "@" ) {
        i += 3;
        let reference = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          reference += srcFile[ i ];
          i++;
        }
        i++;
        tokens.push( { type: "jump", data: reference } );
      } else if ( chr === "?" && srcFile[ i ] === "-" && srcFile[ i + 1 ] === ">" && srcFile[ i + 2 ] === " " && srcFile[ i + 3 ] === "@" ) {
        i += 4;
        let reference = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          reference += srcFile[ i ];
          i++;
        }
        i++;
        let branches = [ ];
        while ( srcFile[ i ] === " " && srcFile[ i + 1 ] === " " && srcFile[ i + 2 ] === '"' ) {
          i += 3;
          let label = "";
          while ( i < srcFile.length && srcFile[ i ] !== '"' ) {
            if ( srcFile[ i ] === "\\" ) {
              i++;
            }
            label += srcFile[ i ];
            i++;
          }
          i++;
          if ( srcFile[ i ] !== " " || srcFile[ i + 1 ] !== "-" || srcFile[ i + 2 ] !== ">" || srcFile[ i + 3 ] !== " " || srcFile[ i + 4 ] !== "@" ) {
            throw "!";
          }
          i += 5;
          let ref = "";
          while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
            ref += srcFile[ i ];
            i++;
          }
          i++;
          branches.push( { choice: label, goesto: ref } );
        }
        tokens.push( { type: "conditional_jump", data: { reference, branches } } );
      } else {
        throw "!";
      }
      continue;
    }
    if ( srcFile[ i ] === "\n" ) {
      sol = true;
      i++;
      if ( srcFile[ i ] === "\n" ) {
        if ( txt.length > 0 ) {
          tokens.push( { type: "text", data: txt } );
          txt = "";
        }
        i++;
        if ( srcFile[ i ] !== "#" ) {
          tokens.push( { type: "next_paragraph" } );
        }
      }
      continue;
    }
    if ( srcFile[ i ] === "*" ) {
      bold = !bold;
      if ( txt.length > 0 ) {
        tokens.push( { type: "text", data: txt } );
        txt = "";
      }
      tokens.push( { type: bold ? "bold_start" : "bold_end" } );
      sol = false;
      i++;
      continue;
    }
    if ( srcFile[ i ] === "/" ) {
      ital = !ital;
      if ( txt.length > 0 ) {
        tokens.push( { type: "text", data: txt } );
        txt = "";
      }
      tokens.push( { type: ital ? "italic_start" : "italic_end" } );
      sol = false;
      i++;
      continue;
    }
    if ( srcFile[ i ] === "_" ) {
      sol = false;
      i++;
      if ( srcFile[ i ] === "_" ) {
        if ( txt.length > 0 ) {
          tokens.push( { type: "text", data: txt } );
          txt = "";
        }
        i++;
        if ( srcFile[ i ] !== "@" ) throw "!";
        i++;
        let reference = "";
        while ( i < srcFile.length && srcFile[ i ] !== ":" ) {
          reference += srcFile[ i ];
          i++;
        }
        if ( ![ '"', "1", "2", "3", "4", "5", "6", "7", "8", "9" ].includes( srcFile[ i + 1 ] ) ) throw "!";
        if ( srcFile[ i + 1 ] === '"' ) {
          let labels = [ ];
          do {
            let label = "";
            i += 2;
            while ( i < srcFile.length && srcFile[ i ] !== '"' ) {
              if ( srcFile[ i ] === "\\" ) {
                i++;
              }
              label += srcFile[ i ];
              i++;
            }
            i++;
            labels.push( label );
          } while ( srcFile[ i ] === "," );
          if ( srcFile[ i ] !== "_" || srcFile[ i + 1 ] !== "_" ) throw "!";
          i += 2;
          tokens.push( { type: "blank_mc", data: { reference, options: labels } } );
        } else {
          i++;
          let n = "";
          while ( "0123456789".includes( srcFile[ i ] ) ) {
            n += srcFile[ i ];
            i++;
          }
          n = +n;
          if ( srcFile[ i ] !== "_" || srcFile[ i + 1 ] !== "_" ) throw "!";
          i += 2;
          tokens.push( { type: "blank_sa", data: { reference, length: n } } );
        }
      } else {
        undr = !undr;
        if ( txt.length > 0 ) {
          tokens.push( { type: "text", data: txt } );
          txt = "";
        }
        tokens.push( { type: undr ? "underline_start" : "underline_end" } );
      }
      continue;
    }
    if ( srcFile[ i ] === "~" ) {
      strk = !strk;
      if ( txt.length > 0 ) {
        tokens.push( { type: "text", data: txt } );
        txt = "";
      }
      tokens.push( { type: strk ? "striked_start" : "striked_end" } );
      sol = false;
      i++;
      continue;
    }
    if ( srcFile[ i ] === "\\" ) {
      i++;
    }
    txt += srcFile[ i ];
    sol = false;
    i++;
  }
  
  let currentFunctionTokens, currentFunctionName = null;
  let functions = [ ];
  let variables = [ ];
  let links = [ ];
  
  for ( let i = 0; i < tokens.length; i++ ) {
    let token = tokens[ i ];
    if ( token.type === "reference" ) {
      if ( currentFunctionName ) {
        currentFunctionTokens.push( { type: "jump", data: token.data } );
        functions.push( { name: currentFunctionName, tokens: currentFunctionTokens } );
      }
      currentFunctionTokens = [ ], currentFunctionName = token.data;
      if ( token.data === "START" ) {
        currentFunctionTokens.push( { type: "page_start" } );
        currentFunctionTokens.push( { type: "paragraph_start", data: false } );
      }
    } else if ( token.type === "comment" ) {
      // Do Nothing
    } else {
      if ( currentFunctionName === null ) continue;
      if ( [
        "text",
        "bold_start", "bold_end",
        "italic_start", "italic_end",
        "underline_start", "underline_end",
        "striked_start", "striked_end"
      ].includes( token.type ) ) {
        currentFunctionTokens.push( token );
      } else {
        if ( token.type === "jump" ) {
          if ( token.data === "END" ) {
            currentFunctionTokens.push( { type: "paragraph_end" } );
            currentFunctionTokens.push( { type: "page_end" } );
          }
          currentFunctionTokens.push( token );
          functions.push( { name: currentFunctionName, tokens: currentFunctionTokens } );
          links.push( { from: currentFunctionName, to: token.data, implied: false } );
          currentFunctionName = null;
        } else if ( token.type === "conditional_jump" ) {
          currentFunctionTokens.push( token );
          functions.push( { name: currentFunctionName, tokens: currentFunctionTokens } );
          let goestoend = false, nodefault = true;
          token.data.branches.forEach( b => {
            if ( b.choice === "" ) nodefault = false;
            if ( b.goesto === "END" ) { goestoend = true; } else { links.push( { from: currentFunctionName, to: b.goesto, implied: false } ); }
          } );
          if ( goestoend || nodefault ) links.push( { from: currentFunctionName, to: "END", implied: !goestoend } );
          currentFunctionName = null;
        } else if ( token.type === "blank_mc" ) {
          variables.push( token.data.reference );
          currentFunctionTokens.push( token );
        } else if ( token.type === "blank_sa" ) {
          variables.push( token.data.reference );
          currentFunctionTokens.push( token );
        } else if ( token.type === "next_page" ) {
          currentFunctionTokens.push( { type: "paragraph_end" } );
          currentFunctionTokens.push( { type: "page_end" } );
          currentFunctionTokens.push( { type: "page_start" } );
          currentFunctionTokens.push( { type: "paragraph_start", data: token.data } );
        } else if ( token.type === "next_paragraph" ) {
          currentFunctionTokens.push( { type: "paragraph_end" } );
          currentFunctionTokens.push( { type: "paragraph_start", data: false } );
        } else if ( token.type === "title" ) {
          if ( currentFunctionTokens[ currentFunctionTokens.length - 1 ].type === "paragraph_start" ) {
            currentFunctionTokens.pop( );
          } else {
            currentFunctionTokens.push( { type: "paragraph_end" } );
          }
          currentFunctionTokens.push( token );
          currentFunctionTokens.push( { type: "paragraph_start", data: false } );
        } else {
          throw "!";
        }
      }
    }
  }
  
  return { functions, variables, links };
}

function generateDotFile( name, parsed ) {
  const { links } = parsed;
  let dot = "";
  dot += `digraph ${ name } {\n`;
  dot += '  rankdir = "LR"\n';
  dot += links.map( l => `  ${ l.from } -> ${ l.to }${ l.implied ? " [style=dashed,color=gray]" : "" }\n` ).join( "" );
  dot += "}";
  return dot;
}