import * as template from "./template.textgenerator.js"

const { TOKEN } = template;

let blank = "";

function* START( ) {
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
  yield [ TOKEN.TITLE, "Chapter 1" ];
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
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "This is the second page." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "Here on this page there is an unreadable blank where the user fills in: " ];
  yield [ TOKEN.BLANK_MC, [ "left", "right" ], $result => { blank = $result; } ];
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
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "This page has two (2) \"paragraphs\" on it." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "Here's the second one." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "The previous page was blank." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
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
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "\\ * * * \\" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield TOKEN.PARA_START;
  yield [ TOKEN.TEXT, "This is the final page." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

export default new template.TextGenerator( START );