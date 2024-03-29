import * as template from "./template.textgenerator.js"

const { TOKEN, makeTokens } = template;

const globals = { };

let blank = "", bin0 = "", bin1 = "", bin2 = "", bin3 = "", shortanswer = "", shortanswer2 = "", echotest = "", humannumber = "";

function reset( ) {
  blank = "";
  bin0 = "";
  bin1 = "";
  bin2 = "";
  bin3 = "";
  shortanswer = "";
  shortanswer2 = "";
  echotest = "";
  humannumber = "";
}

function* START( ) {
  yield TOKEN.PAGE_START;
  yield [ TOKEN.TITLE, "Chapter 1" ];
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is example text including " ];
  yield TOKEN.BOLD_START;
  yield [ TOKEN.TEXT, "bold" ];
  yield TOKEN.BOLD_END;
  yield [ TOKEN.TEXT, ", " ];
  yield TOKEN.ITALIC_START;
  yield [ TOKEN.TEXT, "italics" ];
  yield TOKEN.ITALIC_END;
  yield [ TOKEN.TEXT, ", and other fancifully styled text. Styles can even be " ];
  yield TOKEN.BOLD_START;
  yield TOKEN.ITALIC_START;
  yield [ TOKEN.TEXT, "nested" ];
  yield TOKEN.ITALIC_END;
  yield TOKEN.BOLD_END;
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is the second page." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Here on this page there is an unreadable blank where the user fills in: " ];
  yield [ TOKEN.BLANK_MC, [ "left", "right" ], __$result => { blank = __$result; }, ( ) => blank ];
  yield [ TOKEN.TEXT, ". Its options are \"left\" and \"right\"." ];
  yield* skip( );
  return TOKEN.END;
}

function* skip( ) {
  yield [ TOKEN.TEXT, "The formatting options available also include " ];
  yield TOKEN.UNDERLINE_START;
  yield [ TOKEN.TEXT, "underlined" ];
  yield TOKEN.UNDERLINE_END;
  yield [ TOKEN.TEXT, " text and " ];
  yield TOKEN.STRIKED_START;
  yield [ TOKEN.TEXT, "crossed out" ];
  yield TOKEN.STRIKED_END;
  yield [ TOKEN.TEXT, " text." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This page has two (2) \"paragraphs\" on it." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Here's the second one." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The previous page was blank." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae enim ante. Nunc convallis lorem dui, sed placerat purus facilisis vel. Nunc vitae metus non purus aliquam tincidunt. Maecenas semper, ante ut consequat porta, mi justo pulvinar odio, sed facilisis nunc neque ut ante. Sed at leo a orci feugiat fringilla. Cras ac libero cursus, dignissim felis at, accumsan orci. Sed ultrices ex sit amet sem finibus, sed sodales tortor cursus. Nulla interdum vulputate lorem at sagittis. Integer id enim fringilla, mollis dui accumsan, tincidunt diam." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This page has a whole, whole, whole bunch of text that doesn't actually finish on this page and therefore the text on the next page doesn't start with an indent because it is continuing on from this one. This is accomplished by replacing the triple dash page break" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, true ];
  yield [ TOKEN.TEXT, "with a triple dot page break." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  if ( blank === "left" ) {
    yield* left( );
    return TOKEN.END;
  } else if ( blank === "right" ) {
    yield* right( );
    return TOKEN.END;
  } else {
    return TOKEN.END;
  }
}

function* left( ) {
  yield [ TOKEN.TEXT, "You'll see this " ];
  yield TOKEN.BOLD_START;
  yield [ TOKEN.TEXT, "bold" ];
  yield TOKEN.BOLD_END;
  yield [ TOKEN.TEXT, " text if you chose left." ];
  yield* merge( );
  return TOKEN.END;
}

function* right( ) {
  yield [ TOKEN.TEXT, "You'll see this " ];
  yield TOKEN.ITALIC_START;
  yield [ TOKEN.TEXT, "italic" ];
  yield TOKEN.ITALIC_END;
  yield [ TOKEN.TEXT, " text if you chose right." ];
  yield* merge( );
  return TOKEN.END;
}

function* merge( ) {
  yield [ TOKEN.TEXT, "(You'll see this text regardless)" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is a test that escape characters work: \\ * * * \\" ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Text that looks like the above is accomplished by writing \"\\\\ \\* \\* \\* \\\\\" in the markup." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is a test of using multiple branches. Here filling in the following blanks will return the binary number represented." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "[" ];
  yield [ TOKEN.BLANK_MC, [ "0", "1" ], __$result => { bin0 = __$result; }, ( ) => bin0 ];
  yield [ TOKEN.TEXT, ", " ];
  yield [ TOKEN.BLANK_MC, [ "0", "1" ], __$result => { bin1 = __$result; }, ( ) => bin1 ];
  yield [ TOKEN.TEXT, ", " ];
  yield [ TOKEN.BLANK_MC, [ "0", "1" ], __$result => { bin2 = __$result; }, ( ) => bin2 ];
  yield [ TOKEN.TEXT, ", " ];
  yield [ TOKEN.BLANK_MC, [ "0", "1" ], __$result => { bin3 = __$result; }, ( ) => bin3 ];
  yield [ TOKEN.TEXT, "]" ];
  if ( bin0 === "0" ) {
    yield* n0( );
    return TOKEN.END;
  } else if ( bin0 === "1" ) {
    yield* n1( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n0( ) {
  if ( bin1 === "0" ) {
    yield* n00( );
    return TOKEN.END;
  } else if ( bin1 === "1" ) {
    yield* n01( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n1( ) {
  if ( bin1 === "0" ) {
    yield* n10( );
    return TOKEN.END;
  } else if ( bin1 === "1" ) {
    yield* n11( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n00( ) {
  if ( bin2 === "0" ) {
    yield* n000( );
    return TOKEN.END;
  } else if ( bin2 === "1" ) {
    yield* n001( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n01( ) {
  if ( bin2 === "0" ) {
    yield* n010( );
    return TOKEN.END;
  } else if ( bin2 === "1" ) {
    yield* n011( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n10( ) {
  if ( bin2 === "0" ) {
    yield* n100( );
    return TOKEN.END;
  } else if ( bin2 === "1" ) {
    yield* n101( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n11( ) {
  if ( bin2 === "0" ) {
    yield* n110( );
    return TOKEN.END;
  } else if ( bin2 === "1" ) {
    yield* n111( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n000( ) {
  if ( bin3 === "0" ) {
    yield* n0000( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n0001( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n001( ) {
  if ( bin3 === "0" ) {
    yield* n0010( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n0011( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n010( ) {
  if ( bin3 === "0" ) {
    yield* n0100( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n0101( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n011( ) {
  if ( bin3 === "0" ) {
    yield* n0110( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n0111( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n100( ) {
  if ( bin3 === "0" ) {
    yield* n1000( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n1001( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n101( ) {
  if ( bin3 === "0" ) {
    yield* n1010( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n1011( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n110( ) {
  if ( bin3 === "0" ) {
    yield* n1100( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n1101( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n111( ) {
  if ( bin3 === "0" ) {
    yield* n1110( );
    return TOKEN.END;
  } else if ( bin3 === "1" ) {
    yield* n1111( );
    return TOKEN.END;
  } else {
    yield* nUnknown( );
    return TOKEN.END;
  }
}

function* n0000( ) {
  yield [ TOKEN.TEXT, "(0)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0001( ) {
  yield [ TOKEN.TEXT, "(1)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0010( ) {
  yield [ TOKEN.TEXT, "(2)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0011( ) {
  yield [ TOKEN.TEXT, "(3)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0100( ) {
  yield [ TOKEN.TEXT, "(4)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0101( ) {
  yield [ TOKEN.TEXT, "(5)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0110( ) {
  yield [ TOKEN.TEXT, "(6)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n0111( ) {
  yield [ TOKEN.TEXT, "(7)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1000( ) {
  yield [ TOKEN.TEXT, "(8)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1001( ) {
  yield [ TOKEN.TEXT, "(9)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1010( ) {
  yield [ TOKEN.TEXT, "(10)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1011( ) {
  yield [ TOKEN.TEXT, "(11)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1100( ) {
  yield [ TOKEN.TEXT, "(12)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1101( ) {
  yield [ TOKEN.TEXT, "(13)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1110( ) {
  yield [ TOKEN.TEXT, "(14)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* n1111( ) {
  yield [ TOKEN.TEXT, "(15)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* nUnknown( ) {
  yield [ TOKEN.TEXT, "(???)" ];
  yield* merge2( );
  return TOKEN.END;
}

function* merge2( ) {
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is a page containing a test short answer blank." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This " ];
  yield [ TOKEN.BLANK_SA, 15, __$result => { shortanswer = __$result; }, ( ) => shortanswer ];
  yield [ TOKEN.TEXT, " allows you to enter up to fifteen characters." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "And this one >> " ];
  yield [ TOKEN.BLANK_SA, 3, __$result => { shortanswer2 = __$result; }, ( ) => shortanswer2 ];
  yield [ TOKEN.TEXT, " << gives you three." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is a test of the from stored element. It echoes a value from a blank." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Whatever you put in this blank: " ];
  yield [ TOKEN.BLANK_SA, 10, __$result => { echotest = __$result; }, ( ) => echotest ];
  yield [ TOKEN.TEXT, ", will be echoed here: \"" ];
  yield [ TOKEN.TEXT, echotest ];
  yield [ TOKEN.TEXT, "\"" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is a test of the exec javascript element. It allows arbitrary javascript to be exectuted and run." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield* makeTokens( ( ( ) => { console.log( "Hello!" ); } )( ) );
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The bit of javascript above just logs Hello to the console, it should produce no ouput and should leave no visible impact on the page. It should output hello to the console each time the page is rerendered, such as when an input changes." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This bit of javascript outputs a random number between one and ten: " ];
  yield* makeTokens( ( ( ) => { return Math.floor( Math.random( ) * 10 + 1 ); } )( ) );
  yield [ TOKEN.TEXT, "." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This bit of javascript outputs the current timestamp: " ];
  yield* makeTokens( ( ( ) => { return new Date( ); } )( ) );
  yield [ TOKEN.TEXT, "." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This bit of javascript outputs bold text: " ];
  yield* makeTokens( ( ( ) => { return [ TOKEN.BOLD_START, "BOLD TEXT", TOKEN.BOLD_END ]; } )( ) );
  yield [ TOKEN.TEXT, "." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The bit of javascript below outputs the number placed in this box: " ];
  yield [ TOKEN.BLANK_SA, 15, __$result => { humannumber = __$result; }, ( ) => humannumber ];
  yield [ TOKEN.TEXT, " as the english word(s) for that number." ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield* makeTokens( ( ( ) => {
  function human( string ) {
    const singles = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    if ( string === "" ) {
      return;
    } else {
      let n = +string;
      if ( Number.isInteger( n ) ) {
        let negative = false;
        if ( n < 0 ) {
          n = -n;
          negative = true;
        }
        n = Array.from( n.toString( ), x => +x ).reverse( );
        if ( n.length % 3 === 1 ) n.push( 0 );
        if ( n.length % 3 === 2 ) n.push( 0 );
        let m = [ ];
        for ( let i = 0; i < n.length; i += 3 ) {
          m.push( [ n[ i ], n[ i + 1 ], n[ i + 2 ], i / 3 ] );
        }
        m.reverse( );
        m = m.map( triple => {
          const [ ones, tens, hundreds, idx ] = triple;
          if ( ones === 0 && tens === 0 && hundreds === 0 ) return null;
          let str = "";
          if ( hundreds > 0 ) str += singles[ hundreds ] + " hundred ";
          if ( tens === 1 ) {
            str += [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ][ ones ];
          } else {
            str += [ "", "ten ", "twenty ", "thirty ", "fourty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety " ][ tens ];
            if ( ones === 0 ) {
              str = str.substring( 0, str.length - 1 );
            } else {
              str += singles[ ones ];
            }
          }
          str += [ "", " thousand", " million", " billion", " trillion" ][ idx ];
          return ( negative ? "negative " : "" ) + str;
        } ).filter( x => x !== null );
        let str = m.join( " " );
        if ( str === "" ) str = "zero";
        return str;
      } else {
        return "not an integer";
      }
    }
  }
  return human( humannumber );
} )( ) );
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This is the final page." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

export default new template.TextGenerator( START, reset );