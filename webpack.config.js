/*


Webpack Basics
==================================================
Based on: https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70


Node.js - JavaScript Runtime
------------------------------
Runs server-side JavaScript code.
Installation: https://nodejs.org/
Documentation: https://nodejs.org/dist/latest-v10.x/docs/api/


NPM - Package Manager
------------------------------
Allows you to easily keep track, download and update the js libraries required by your projects. This also makes your code repositories smaller and cleaner as you only need to include the package.json file instead of the full code of the used libraries. You can publish your own projects and share them with other deveopers.
Installation: Comes included with Node.js
Documentation: https://docs.npmjs.com/
Others: Bower and Yarn

### Setting up a project
$ npm init									Creates a package.json file on your project where you can define basic information and a list of dependencies
$ npm install moment --save-prod			This downloads the package 'moment' from the npm repository, copies it to the 'node_modules' folder on the current project,
											and adds it to the list of dependencies on package.json
											the --save-prod flag indicates that you’ll use this dependency only on your dev environment, but don’t need to output it for production
$ npm install								Downloads and installs all the projects' dependencies based on its package.json file
											you can share just this file with other devs, and they’ll be able to download all the necessary dependencies to run your code


Webpack - Module Bundler
------------------------------
In Node.js you can import dependencies inside js files using the 'require' statement, but this is not supported on web browsers as they don't have access to the file system, so to be able to use this feature on your web projects you'll need to run a build task that detects dependencies and injects them all into a single file you can use for web. This is what a module bundler does.
Documentation: https://webpack.js.org/api/cli/
Others: CommonJS, Browserify

### Installing webpack
$ npm i --save-dev webpack webpack-cli		You need both webpack and webpack-cli, the 'i' keyword is a shortcut for 'install'

### Running webpack
$ ./node_modules/.bin/webpack				The webpack script will be stored inside the node_modules folder, to call it you need to enter its full path

Having to write the full path every time is not very practical, you can create a npm 'shortcut' by defining a 'script' on the package.json file
When defining a shortcut you don't need to enter the full path to the webpack script, you can simply refer to it as 'webpack'
"scripts": {
	"build": "webpack --progress"
}

$ npm run build								You can now run webpack with the arguments defined on the shortcut by simply typing 'npm run' plus the name of the shortcut

### Bundling files
$ webpack source1.js source2.js -o dist.js	This command instructs webpack to take two source files, bundle all their dependencies, and output a single distribution file
$ webpack									If you run webpack without any arguments, it will look for an input file in './src/index.js' and will output to './dist/main.js'

### Using configuration files
To make configuration easier and cleaner, you can define the settings in a configuration file
$ webpack									Calling webpack without any arguments will look for a default configuration file named 'webpack.config.js'
$ webpack --config example.config.js		Or you can specify a different file by adding a --config flag

### Sample modifier flags
$ webpack --watch							Automatically runs webpack every time any of the input files changes, this way you don't have to manually re-run the tasks
$ webpack --progress						Outputs a progress indicator while running the tasks
$ webpack -d								Shortcut for development settings: --debug --devtool cheap-module-eval-source-map --output-pathinfo
$ webpack -p								Shortcut for production settings: --optimize-minimize --define process.env.NODE_ENV="production"
$ webpack --env.platform=web				Sets environment variables
$ webpack --mode=development				Sets the 'mode' tasks should use, can be 'development' or 'production'. Defaults to 'production'


Code Transpilers
------------------------------
Transpilers are scripts that take files using the latest syntax of a language and automatically converts them to use an older syntax for better browser support (looking at you IE).
Webpack allows you to run code transpilers while bundling scripts.

Examples for CSS
⁃ SASS
⁃ LESS
⁃ Styles

Examples for JavaScript
⁃ Babel
⁃ CoffeeScript
⁃ TypeScript


Task Runners
------------------------------
Task runners are scripts that automate different parts of the build processs (minifiying code, optimise images, run tests, etc)
You can use webpack as a task runner by adding 'loaders' (scripts that run while processing bundled files) and 'plugins' (scripts that run on the resulting bundle files)
Others: Grunt, Gulp



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
export {foo, bar, myVar as baz};			exports multiple elements, you can use existing elements and export them with a different name using the 'as' keyword

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



Webpack Configuration File
==================================================
Documentation: https://webpack.js.org/configuration/


Structure
------------------------------
*/
const webpack = require('webpack');
const webpackConfig = {
	target: 'web',							// instructs webpack to target a specific environment
	entry: 'src/index.js',					// the file(s) that represent the entry point for the application
	output: {
		filename: 'main.js',				// the name to use for the final bundle file(s)
		path: __dirname+'/dist',			// the target directory for the bundle files
	},
	module: {
		rules: [],							// you can add 'module loaders' to run extra tasks (transpile css and js, etc)
	},
	plugins: [],							// you can add plugins to further process the generated files
	devServer: {},							// the settings to use when running webpack-dev-server for live reloading/hot module replacement
	devtool: 'eval',						// how source maps should be generated
}
/*


Entry and output files
------------------------------
To define the entry files you can use:
1. a string to define a single entry file
2. an array for multiple files that should be bundled into a single file
3. an object where keys represent each output file to be generated, and values represent the file(s) to be included on each file

When defining the output filenames:
- you can enter the exact name you want, e.g. 'main.js'
- or you can use one of many available keywords, especially useful when you are outputting multiple files
see: https://webpack.js.org/configuration/output/#output-filename
*/
webpackConfig.entry = {
	main: './src/index.js',
	home: ['./src/home1.js', './src/home2.js'],
}
webpackConfig.output = {
	filename: '[name].js',
	path: __dirname+'/dist',
}
/*


Transpiling ES6+ JavaScript
------------------------------
1. Install Babel:
$ npm i --save-dev babel-core				Babel's core functionality for Node.js
$ npm i --save-dev babel-loader				loader to integrate it with webpack
$ npm i --save-dev babel-preset-env			preset settings defining which new js features to transpile, and which ones to leave out

2. Add a module rule
*/
const babelModule = {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['env'],
		},
	},
};
webpackConfig.module.rules.push( babelModule );
/*


Importing Non-JS Files
------------------------------
It's possible to load file types other than .js to read and manipulate their contents with js code,
to do this you need to install and configure the appropiate module loaders for the file types you need.

1. Install the loaders
$ npm i --save-dev csv-loader
$ npm i --save-dev xml-loader
json files are supported out of the box

2. Add the module rules
*/
const csvLoader = {
	test: /\.csv$/,
	include: __dirname+'/src',
	use: ['csv-loader'],
};
webpackConfig.module.rules.push( csvLoader );

const xmlLoader = {
	test: /\.xml$/,
	include: __dirname+'/src',
	use: ['xml-loader'],
};
webpackConfig.module.rules.push( xmlLoader );
/*

3. In your js code simply call require() or import the same way you do with js files.


Transpiling SASS Files
------------------------------
???


Auto-generating HTML
------------------------------
1. Install packages:
$ npm i --save-dev clean-webpack-plugin		deletes an entire folder on each run
$ npm i --save-dev html-webpack-plugin		auto-generates an html file with the correct <script> and <style> tags (useful for cache busting when using hashed file names)

2. Configure webpack:
*/

// Update the output file name to include auto-generated hashes
webpackConfig.output.filename = '[name].[hash].js';

// Delete the entire 'dist' folder on each run
const cleanWebpackPlugin = require('clean-webpack-plugin');
webpackConfig.plugins.push( new cleanWebpackPlugin(['dist']) );

// Use './src/index.html' as a template for generating the final html file, you can pass your own custom vars to make them available within the template
// the generated file will automatically add the correct links to the hashed script files
const htmlWebpackPlugin = require('html-webpack-plugin');
webpackConfig.plugins.push( new htmlWebpackPlugin({
	title: 'Webpack Reference',
	template: './src/index.html',
}) );
/*


Live Reloading / Hot Module Replacement
------------------------------
1. Install webpack dev server
$ npm i --save-dev webpack-dev-server

2. Configure the server settings, including the HMR plugin if necessary
*/
webpackConfig.devServer = {
	contentBase: './dist',				// should point to the web root folder
	hot: true,							// enable hot module replacement
	inline: true,						// if hmr fails, then reload the full page
};
webpackConfig.plugins.push( new webpack.HotModuleReplacementPlugin() );
/*

3. If you want to use hot module replacement, use the js methods made available in the module.hot object
- see the ./src/index.js file for examples

4. Add a new shortcut in package.json to call the dev server
"scripts": {
	"server": "webpack-dev-server --mode=development --open"
},

5. Finally, run the server
$ npm run server


Export Config Settings
------------------------------
Finally, export the configuration object to make it available for other scripts:
*/
webpackConfig.devtool = 'source-map';
module.exports = webpackConfig;
