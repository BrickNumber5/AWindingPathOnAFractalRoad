class TextNode {
  constructor( type, text, props ) {
    this.type = type;
    this.text = text;
    this.props = props ?? { };
  }
  
  makeElement( ) { }
}

export class PlainNode extends TextNode {
  constructor( text ) {
    super( "plain", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "span" );
    e.className = "text-plain";
    e.innerText = this.text;
    return e;
  }
}

export class BoldNode extends TextNode {
  constructor( text ) {
    super( "bold", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "span" );
    e.className = "text-bold";
    e.innerText = this.text;
    return e;
  }
}

export class ItalicNode extends TextNode {
  constructor( text ) {
    super( "italic", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "span" );
    e.className = "text-italic";
    e.innerText = this.text;
    return e;
  }
}

export class UnderlinedNode extends TextNode {
  constructor( text ) {
    super( "underlined", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "span" );
    e.className = "text-underlined";
    e.innerText = this.text;
    return e;
  }
}

export class StrikedNode extends TextNode {
  constructor( text ) {
    super( "striked", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "span" );
    e.className = "text-striked";
    e.innerText = this.text;
    return e;
  }
}

export class TitleNode extends TextNode {
  constructor( text ) {
    super( "title", text );
  }
  
  makeElement( ) {
    let e = document.createElement( "h1" );
    e.className = "text-title";
    e.innerText = this.text;
    return e;
  }
}

export class MCBlankNode extends TextNode {
  constructor( options, resolvedCallback ) {
    super( "mc-blank", null, { options, resolvedCallback } );
  }
  
  makeElement( ) {
    let e = document.createElement( "button" );
    e.className = "text-blank";
    return e;
  }
}

export class Paragraph {
  constructor( nodes ) {
    this.nodes = nodes;
  }
  
  makeElement( ) {
    let e = document.createElement( "p" );
    this.nodes.forEach( n => e.appendChild( n.makeElement( ) ) );
    return e;
  }
}

export class Page {
  constructor( paragraphs ) {
    this.paragraphs = paragraphs;
  }
}

export class TextGenerator {
  constructor( gen ) {
    this.gen = gen;
  }
}

export const TOKEN = {
  PAGE_START: 0,
  PAGE_END: 1,
  PARA_START: 2,
  PARA_END: 3
};