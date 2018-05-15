import importedData from './export.js';
document.addEventListener('DOMContentLoaded', function(){
	console.log( 'Document ready: index.js' );
	console.log( 'Imported data: '+importedData );
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