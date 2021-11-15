import textgen from "./test.textgenerator.js";

textgen.start( );

const container = document.querySelector( ".container" ),
      prevPageButton = document.querySelector( ".prevPageButton" ),
      nextPageButton = document.querySelector( ".nextPageButton" ),
      optionsbar = document.querySelector( ".optionsbar" );

let page = 0, pages = [ document.querySelector( ".page" ) ];

let blankMC;

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
  optionsbar.style.display = "none";
}

nextPageButton.onclick = nextPages;

function prevPages( ) {
  if ( page % 2 === 0 ) pages[ page - 1 ].style.display = "none";
  pages[ page ].style.display = "none";
  page -= ( page % 2 === 0 ) ? 2 : 1;
  pages[ page ].style.display = "";
  nextPageButton.disabled = false;
  if ( page > 0 ) {
    pages[ page - 1 ].style.display = "";
  } else {
    prevPageButton.disabled = true;
  }
  optionsbar.style.display = "none";
}

prevPageButton.onclick = prevPages;

function checkResolved( ) {
  let unresolved = (
    ( page % 2 === 0 ) ? pages[ page - 1 ].querySelector( '.blank[data-unresolved="true"]' ) : false
  ) || pages[ page ].querySelector( '.blank[data-unresolved="true"]' );
  if ( !unresolved ) {
    nextPageButton.disabled = false;
  }
}

function rerender( ) {
  document.querySelectorAll( ".container .page:not([data-first])" ).forEach( p => p.parentNode.removeChild( p ) );
  pages = [ document.querySelector( ".page" ) ];
  textgen.start( );
  for ( let i = 1; i <= page; i++ ) {
    pages[ i ] = textgen.nextPage( );
    pages[ i ].style.display = ( page - i <= 1 ) ? "" : "none";
    container.insertBefore( pages[ i ], prevPageButton );
  }
}

function resolveMC( blank, options, resolveFn, getFn ) {
  blankMC = { options, resolve: v => {
    resolveFn( v );
    optionsbar.style.display = "none";
    rerender( );
    checkResolved( );
  } };
  optionsbar.style.display = "";
  while ( optionsbar.firstChild ) {
    optionsbar.removeChild( optionsbar.lastChild );
  }
  for ( let i = 0; i < options.length; i++ ) {
    let button = document.createElement( "button" );
    button.className = "blank-option";
    button.innerText = options[ i ];
    button.onclick = ( ) => blankMC.resolve( blankMC.options[ i ] );
    optionsbar.appendChild( button );
  }
}

window.resolveMC = resolveMC;