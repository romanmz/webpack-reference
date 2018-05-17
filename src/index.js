import importedData from './export.js';

// Importing other file types
import csvData from './files/data.csv';
import xmlData from './files/data.xml';
import jsonData from './files/data.json';

// Copying files
import imageURL from './files/image.png';
import cssStyles from './scss/styles.scss';

document.addEventListener('DOMContentLoaded', function(){
	import(/* webpackChunkName: 'lodash' */ 'lodash').then( lodash=>{
		console.log( 'Document ready: index.js' );
		console.log( 'Imported data: '+importedData );
		console.log( csvData );
		console.log( xmlData );
		console.log( jsonData );
		console.log( imageURL );
		console.log( cssStyles );
		console.log( lodash.default.zip( [1, 2], ['one', 'two'], ['uno', 'dos'] ) );
	});
});


// Hot Module Replacement
// ------------------------------
if( module.hot ) {
	
	
	// To detect when this same file is replaced:
	// 1. run the 'accept' method with an empty function
	module.hot.accept( ()=>{} );
	// 2. run the 'dispose' method, which runs right before the module is reloaded, and pass on persistent data to be made available on the next run (the object is reset every time)
	module.hot.dispose( data=>{ data.fileUpdated = 1 } );
	// 3. check for the data set on the previous set, if it exists it means the module has just been reloaded
	if( module.hot.data && module.hot.data.fileUpdated ) {
		console.log( 'File updated: index.js' )
	}
	
	
	// To detect when other files have been replaced, simply call the 'accept' method passing the path to the file as the first argument (only works for modules loaded by the current file):
	module.hot.accept( './export.js', ()=>{
		console.log( 'File updated: export.js' );
	})
	
	
}
