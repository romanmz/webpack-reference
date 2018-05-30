/*


Exporting and Importing Modules
==================================================


Node.js imports
------------------------------
On Node.js there's a reserved 'module' object available on every file,
use the 'exports' property of that object to define the data or elements that should be made available for other modules that import the file.

module.exports = myElement;					exports a single element, if you replace the 'exports' property multiple times in the same file only the last value will be used
module.exports.foo = {};					by default 'exports' is an object, so you can export multiple elements by adding them as properties

const single = require('./single.js');		imports a file containing a single element, and creates an alias to refer to it
single();
const multiple = require('./multiple.js');	imports a file containing multiple elements, and creates an alias to refer to the object that contains them
multiple.foo();
multiple.bar();


ES6+ imports
------------------------------
Since web browsers don't recognise Node's require statements, you need to use a module bundler like webpack to walk through the dependency tree and generate a single web-friendly file.
Another alternative is to use JavaScript's ES6 imports, those are not supported by older browsers,
but you can run a code transpiler like Babel during the build process to convert the code to a syntax old browsers can recognise.

export default myElement;					exports a single element, you can only call this once per file otherwise you'll get an error
export {foo, bar, myVar as baz};			exports multiple elements, you can export elements with a different name using the 'as' keyword.
											if you call this multiple times, the final exported object will be the result of merging all objects passed on every call

import single from './single.js';			imports a file containing a single element, and creates an alias to refer to it
single();
import * as multiple from './multiple.js';	imports all the elements exported by a file, and stores them on an object with a given name
multiple.foo();
multiple.bar();
import {foo, bar} from './multiple.js';		imports only the listed elements, which will become accessible as top level elements
foo();
bar();
import {foo as loremipsum}					when importing individual elements, you can assign them to an alias if you want to refer to them by a different name
loremipsum();
import './multiple.js';						you can also choose to execute the code from another file, without actually importing anything from it


*/
