import lodash from 'lodash';
document.addEventListener('DOMContentLoaded', function(){
	console.log( 'Document ready: home1.js' );
	console.log( lodash.zip( [1, 2], ['one', 'two'], ['uno', 'dos'] ) );
});
