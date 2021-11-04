console.log( "Started compiler.js" );

const fs = require( "fs" );

const re = /^(.+)\.textgenerator\.custommarkup$/;

let srcFiles = fs.readdirSync( "./src" );

srcFiles.forEach( ( file, i ) => { let m = re.exec( file ); if ( m !== null ) compileFile( m[ 1 ] ); } );

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
  return "// TODO";
}