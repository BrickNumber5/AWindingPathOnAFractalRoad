export class TextGenerator {
  constructor( gen ) {
    this.gen = gen( );
  }
}

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