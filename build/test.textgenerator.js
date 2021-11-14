import * as template from "./template.textgenerator.js"

const { TOKEN } = template;

let blank = "";

function reset( ) {
  blank = "";
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
  yield [ TOKEN.TEXT, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae enim ante. Nunc convallis lorem dui, sed placerat purus facilisis vel. Nunc vitae metus non purus aliquam tincidunt. Maecenas semper, ante ut consequat porta, mi justo pulvinar odio, sed facilisis nunc neque ut ante. Sed at leo a orci feugiat fringilla. Cras ac libero cursus, dignissim felis at, accumsan orci. Sed ultrices ex sit amet sem finibus, sed sodales tortor cursus. Nulla interdum vulputate lorem at sagittis. Integer id enim fringilla, mollis dui accumsan, tincidunt diam. Ut faucibus pharetra mi et imperdiet. Pellentesque lobortis cursus condimentum." ];
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
  yield [ TOKEN.TEXT, "This is the final page." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

export default new template.TextGenerator( START, reset );