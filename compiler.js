console.log( "Started compiler.js" );

const fs = require( "fs" );

const re = /^(.+)\.textgenerator\.custommarkup$/;

let srcFiles = fs.readdirSync( "./src" );

srcFiles.forEach( ( file, i ) => { let m = re.exec( file ); if ( m !== null ) compileFile( m[ 1 ], i, srcFiles.length ); } );

function compileFile( name, num = 0, max = 1 ) {
  const srcFileName = `./src/${ name }.textgenerator.custommarkup`;
  const resFileName = `./build/${ name }.textgenerator.js`
  console.log( `Processing ${ name }          [${ num + 1 }/${ max }]` );
  console.log( `Reading ${ srcFileName }` );
  const srcFile = fs.readFileSync( srcFileName ).toString( );
  console.log( "DEBUG", "\n```\n" + srcFile + "\n```\n"  );
  console.log( `Compiling` );
  const resFile = compile( srcFile );
  console.log( "DEBUG", "\n```\n" + resFile + "\n```\n" );
  console.log( `Writing ${ resFileName }` );
  try {
    fs.unlinkSync( resFileName );
  } catch ( e ) {
    // Do nothing, if it errors that just means the file doesn't exist.
  }
  fs.writeFileSync( resFileName, resFile );
}

function compile( srcFile ) {
  let res = "";
  res += 'import * as template from "./template.textgenerator.js"\n\n';
  res += "function* root( ) {\n";
  res += "  const { TOKEN } = template;\n  \n";
  
  let ast = parse( srcFile );
  console.log( "DEBUG" );
  console.log( ast );
  
  res += "}\n\n";
  res += "export default textgenerator = new template.TextGenerator( root );";
  return res;
}

function parse( srcFile ) {
  let tokens = [ ];
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
        tokens.push( { type: "next_page" } );
      } else if ( chr === "-" && srcFile[ i ] === ">" && srcFile[ i + 1 ] === " " && srcFile[ i + 2 ] === "@" ) {
        i += 3;
        let reference = "";
        while ( i < srcFile.length && srcFile[ i ] !== "\n" ) {
          reference += srcFile[ i ];
          i++;
        }
        i++;
        tokens.push( { type: "jump", data: reference } );
      } else if ( chr === "?" && srcFile[ i ] === "-" && srcFile[ i + 1 ] === ">" ) {
        
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
      undr = !undr;
      if ( txt.length > 0 ) {
        tokens.push( { type: "text", data: txt } );
        txt = "";
      }
      tokens.push( { type: undr ? "underline_start" : "underline_end" } );
      sol = false;
      i++;
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
    txt += srcFile[ i ];
    sol = false;
    i++;
  }
  return tokens;
}