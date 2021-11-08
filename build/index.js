import textgen from "./test.textgenerator.js";

textgen.start( );

const container = document.querySelector( ".container" ),
      prevPageButton = document.querySelector( ".prevPageButton" ),
      nextPageButton = document.querySelector( ".nextPageButton" );

let page = 0, pages = [ document.querySelector( ".page" ) ];

function nextPages( ) {
  if ( page > 0 ) pages[ page - 1 ].style.display = "none";
  pages[ page ].style.display = "none";
  page++;
  if ( pages.length <= page ) {
    pages[ page ] = textgen.nextPage( );
    container.insertBefore( pages[ page ], prevPageButton );
  }
  pages[ page ].style.display = "";
  if ( pages[ page ].dataset.last !== "true" ) {
    page++;
    if ( pages.length <= page ) {
      pages[ page ] = textgen.nextPage( );
      container.insertBefore( pages[ page ], prevPageButton );
    }
    pages[ page ].style.display = "";
  }
  prevPageButton.disabled = false;
  let unresolved = (
    ( page % 2 === 0 ) ? pages[ page - 1 ].querySelector( '.blank[data-unresolved="true"]' ) : false
  ) || pages[ page ].querySelector( '.blank[data-unresolved="true"]' );
  if ( pages[ page ].dataset.last === "true" || unresolved ) {
    nextPageButton.disabled = true;
  }
}

function prevPages( ) {
  if ( page % 2 === 0 ) pages[ page - 1 ].style.display = "none";
  pages[ page ].style.display = "none";
  page -= 2;
  pages[ page ].style.display = "";
  nextPageButton.disabled = false;
  if ( page > 0 ) {
    pages[ page - 1 ].style.display = "";
  } else {
    prevPageButton.disabled = true;
  }
}

window.nextPages = nextPages;
window.prevPages = prevPages;

window.tst = textgen;