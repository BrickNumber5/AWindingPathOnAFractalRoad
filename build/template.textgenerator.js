export const TOKEN = {
  END: -1,
  TEXT: 0,
  PAGE_START: 1,
  PAGE_END: 2,
  PARA_START: 3,
  PARA_END: 4,
  BOLD_START: 5,
  BOLD_END: 6,
  ITALIC_START: 7,
  ITALIC_END: 8,
  UNDERLINE_START: 9,
  UNDERLINE_END: 10,
  STRIKED_START: 11,
  STRIKED_END: 12,
  TITLE: 13,
  BLANK_MC: 14,
};

export class TextGenerator {
  constructor( gen, resetFn ) {
    this.gen = gen;
    this.resetFn = resetFn;
  }
  start( ) {
    this.runningGen = this.gen( );
    this.page_num = 0;
  }
  nextToken( ) {
    let n = this.runningGen.next( ).value;
    if ( typeof n === "number" ) n = [ n ];
    let token = { type: n[ 0 ] };
    if ( n.length > 1 ) token.ops = n.slice( 1 );
    return token;
  }
  nextPage( ) {
    const format_starting_types = new Set( [ TOKEN.BOLD_START, TOKEN.ITALIC_START, TOKEN.UNDERLINE_START, TOKEN.STRIKED_START ] );
    const format_ending_types = new Set( [ TOKEN.BOLD_END, TOKEN.ITALIC_END, TOKEN.UNDERLINE_END, TOKEN.STRIKED_END ] );
    const format_class_names = {
      [ TOKEN.BOLD_START ]: "bold",
      [ TOKEN.ITALIC_START ]: "italic",
      [ TOKEN.UNDERLINE_START ]: "underline",
      [ TOKEN.STRIKED_START ]: "striked"
    };
    let elements_stack = [ ];
    while ( true ) {
      const { type, ops } = this.nextToken( );
      if ( type === TOKEN.END ) {
        let page = document.createElement( "div" );
        page.className = "page";
        page.dataset.number = this.page_num + 1;
        page.dataset.last = true;
        // Special Final Page goes here
        return page;
      }
      if ( type === TOKEN.TEXT ) {
        let text = document.createTextNode( ops[ 0 ] );
        elements_stack.at( -1 ).appendChild( text );
        continue;
      }
      if ( type === TOKEN.PAGE_START ) {
        let page = document.createElement( "div" );
        page.className = "page";
        page.dataset.number = this.page_num + 1;
        page.dataset.last = false;
        this.page_num++;
        elements_stack.push( page );
        continue;
      }
      if ( type === TOKEN.PAGE_END ) {
        return elements_stack.at( -1 );
      }
      if ( type === TOKEN.PARA_START ) {
        let p = document.createElement( "p" );
        p.dataset.continues = ops[ 0 ];
        elements_stack.push( p );
        continue;
      }
      if ( type === TOKEN.PARA_END ) {
        let p = elements_stack.pop( );
        elements_stack.at( -1 ).appendChild( p );
        continue;
      }
      if ( format_starting_types.has( type ) ) {
        let span = document.createElement( "span" );
        span.className = format_class_names[ type ];
        elements_stack.push( span );
        continue;
      }
      if ( format_ending_types.has( type ) ) {
        let span = elements_stack.pop( );
        elements_stack.at( -1 ).appendChild( span );
        continue;
      }
      if ( type === TOKEN.TITLE ) {
        let title = document.createElement( "h1" );
        title.className = "title";
        title.innerText = ops[ 0 ];
        elements_stack.at( -1 ).appendChild( title );
        continue;
      }
      if ( type === TOKEN.BLANK_MC ) {
        const [ options, resolveFn, getFn ] = ops;
        let blank = document.createElement( "button" );
        blank.className = "blank";
        let v = getFn( );
        if ( v === "" ) {
          blank.dataset.unresolved = true;
        } else {
          blank.dataset.filled = v;
        }
        blank.onclick = resolveMC.bind( null, blank, options, resolveFn, getFn );
        elements_stack.at( -1 ).appendChild( blank );
        continue;
      }
    }
  }
}