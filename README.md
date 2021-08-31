# Laravel Mix Replace In File

[![Latest Version on NPM](https://img.shields.io/npm/v/laravel-mix-replace-in-file.svg?style=flat-square)](https://npmjs.com/package/laravel-mix-replace-in-file)
[![npm](https://img.shields.io/npm/dt/laravel-mix-replace-in-file.svg?style=flat-square)](https://www.npmjs.com/package/laravel-mix-replace-in-file)
[![Software License](https://img.shields.io/npm/l/laravel-mix-replace-in-file.svg?style=flat-square)](LICENSE)

This extension allows the replacement of strings in files, essentially exposing the functionality provided by the [Replace in file](https://www.npmjs.com/package/replace-in-file) package to Laravel Mix.

## Installation

Install the extension as a development dependency:

````
npm i -D laravel-mix-replace-in-file
````

## Usage

Require the extension and call the `stringReplace` method. For the full set of options available, please refer to the [Replace in file](https://www.npmjs.com/package/replace-in-file) documentation.

````
const mix = require('laravel-mix');

require( 'laravel-mix-replace-in-file' );

mix.replaceInFile( {
	files: './dist/script.js',
	from: /REPLACE_THIS_STRING/g,
	to: 'with_this_string',
} );
````