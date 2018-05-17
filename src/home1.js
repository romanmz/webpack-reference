document.addEventListener('DOMContentLoaded', function(){
	import('lodash').then( lodash=>{
		console.log( 'Document ready: home1.js' );
		console.log( lodash.default.zip( [1, 2], ['one', 'two'], ['uno', 'dos'] ) );
	});
});
