## Installation

````
npm i -D laravel-mix-replace-in-file
````

## Usage

````
const mix = require('laravel-mix');

require( 'laravel-mix-replace-in-file' );

mix.stringReplace( {
	files: './dist/script.js',
	from: /REPLACE_THIS_STRING/g,
	to: 'with_this_string',
} );
````