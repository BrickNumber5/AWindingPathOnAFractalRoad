export class TextGenerator {
  constructor( gen ) {
    this.gen = gen( );
  }
}

export const TOKEN = {
  PAGE_START: 0,
  PAGE_END: 1,
  PARA_START: 2,
  PARA_END: 3,
  BOLD_START: 4,
  BOLD_END: 5,
  ITALIC_START: 6,
  ITALIC_END: 7,
  UNDERLINE_START: 8,
  UNDERLINE_END: 9,
  STRIKED_START: 10,
  STRIKED_END: 11
};