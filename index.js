let mix = require( 'laravel-mix' );
const Task = require( 'laravel-mix/src/tasks/Task' );
const FileCollection = require( 'laravel-mix/src/FileCollection' );

class ReplaceInFileTask extends Task {
	run() {
		this.files = new FileCollection( this.data.files );
		this.replace = require( 'replace-in-file' );

		this.replace.sync( this.data )
	}

	onChange( updatedFile ) {
		this.replace.sync( this.data )
	}
}

class ReplaceInFile {
	dependencies() {
		return [ 'replace-in-file' ];
	}

	register( config ) {
		Mix.addTask( new ReplaceInFileTask( config ) );
	}
}

mix.extend( 'replaceInFile', new ReplaceInFile() );