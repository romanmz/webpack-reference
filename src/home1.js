import importedData from './export.js';
document.addEventListener('DOMContentLoaded', function(){
	import(/* webpackChunkName: 'lodash' */ 'lodash').then( lodash=>{
		console.log( 'Document ready: home1.js' );
		console.log( 'Imported data: '+importedData );
		console.log( lodash.default.zip( [1, 2], ['one', 'two'], ['uno', 'dos'] ) );
	});
});
