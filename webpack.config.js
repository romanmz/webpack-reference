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
	optimization: {},						// rules for generating code 'chunks'
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
	[name]									entry name
	[hash]									build hash (updated every time the project source code changes)
	[chunkhash]								chunk hash (updated only when the content of the chunk itself changes)
	[id]									unique module number
	[query]
	Documentation: https://webpack.js.org/configuration/output/#output-filename
*/
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const useHMR = process.env.NODE_ENV === 'local';
const fileNames = devMode ? '[name]' : '[name].[hash]';

webpackConfig.entry = {
	main: './src/index.js',
	home: ['./src/home1.js', './src/home2.js'],
}
webpackConfig.output = {
	filename: fileNames+'.js',
	path: __dirname+'/dist',
}
/*


Transpiling ES6+ JavaScript
------------------------------
1. Install Babel:
$ npm i --save-dev babel-core				Babel's core functionality for Node.js
$ npm i --save-dev babel-loader				loader to integrate it with webpack
$ npm i --save-dev babel-preset-env			preset settings defining which new js features to transpile, and which ones to leave out
$ npm i --save-dev babel-plugin-syntax-dynamic-import		adds support for import() functions (for asynchronous module loading)

2. Add a module rule
*/
const babelModule = {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['env'],
			plugins: ['syntax-dynamic-import'],
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


Copying Files
------------------------------
There's also a generic file loader that allows you to grab files from the source folder, copy them to the output folder, and retrieve the final urls from within your js code.
This can also be used to make any kind of files available for other loaders and plugins.

1. Install the loader
$ npm i --save-dev file-loader

2. Add the module rules
*/
const imagesCopy = {
	test: /\.(jpg|jpeg|png|gif|svg)$/,
	include: __dirname+'/src/',
	use: {
		loader: 'file-loader',
		options: {
			outputPath: 'images',
			name: fileNames+'.[ext]',
		}
	},
};
webpackConfig.module.rules.push( imagesCopy );

const fontsCopy = {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
	include: __dirname+'/src/',
	use: {
		loader: 'file-loader',
		options: {
			outputPath: 'fonts',
			name: fileNames+'.[ext]',
		}
	},
}
webpackConfig.module.rules.push( fontsCopy );
/*


Transpiling SASS Files
------------------------------
$ npm i --save-dev css-loader				loader for css files (imports them as simple text strings)
$ npm i --save-dev style-loader				embeds loaded css as <style> tags (using js), supports HMR
$ npm i --save-dev mini-css-extract-plugin	outputs loaded css as separate files and adds the correct <link> tags on the generated html code
$ npm i --save-dev node-sass sass-loader	transpiles scss/sass files into css (node-sass is required by sass-loader)
*/
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssLoader = {
	test: /\.(css|sass|scss)$/,
	include: __dirname+'/src',
	use: [
		useHMR ? 'style-loader' : miniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				url: false,					// set to false to disable module loading of url() resources
				import: true,				// set to false to disable module loading of @import statements
				minimize: !devMode,			// set to true to minimze the css code. for extra settings check: http://cssnano.co/guides/presets/
				sourceMap: devMode,			// set to true to generate source maps (warning: they can be slow and buggy)
			}
		},
		{
			loader: 'sass-loader',
			options: {
				outputStyle: 'expanded',	// nested*, expanded, compact, compressed
			}
		}
	],
};
webpackConfig.module.rules.push( cssLoader );
webpackConfig.plugins.push( new miniCssExtractPlugin({
	filename: 'css/'+fileNames+'.css',
	chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
}) );
/*


Auto-generating HTML
------------------------------
1. Install packages:
$ npm i --save-dev clean-webpack-plugin		deletes an entire folder on each run
$ npm i --save-dev html-webpack-plugin		auto-generates an html file with the correct <script> and <style> tags (useful for cache busting when using hashed file names)

2. Configure webpack:
*/

// Delete the entire 'dist' folder on each run
const cleanWebpackPlugin = require('clean-webpack-plugin');
webpackConfig.plugins.push( new cleanWebpackPlugin(['dist']) );

// Use './src/index.html' as a template for generating the final html file, you can pass your own custom vars to make them available within the template
// the generated file will automatically add the correct links to the hashed script files
const htmlWebpackPlugin = require('html-webpack-plugin');
webpackConfig.plugins.push( new htmlWebpackPlugin({
	title: 'Webpack Reference',
	template: './src/index.html',
	filename: 'index.html',
}) );
/*


Common Chunks
------------------------------
A 'chunk' refers to one or more scripts bundled together and output as files separate from the main entry files.
This is useful to:
- make modules available for asynchronous loading
- prevent code duplication when the same module is reused on different files (by default the whole module code is repeated on each file that uses it)
- separate vendor libraries from your own code, which lets you apply different cache busting rules (vendor code usually changes less often and can be cached for longer)
Documentation: https://webpack.js.org/configuration/optimization/
Documentation: https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks

### Webpack runtime
All entry files include a copy of the webpack bootstrap code (which makes module loading possible).
You can choose to output it as a separate file (reduces file size but increases requested files) by setting the 'optimization.runtimeChunk' option:

false										Disabled, does not output as a separate file (default setting)
true										Enabled, creates a separate file for every single entry file
'multiple'									Same as 'true'
'single'									Enabled, creates only one file that all modules will use
*/
webpackConfig.optimization.runtimeChunk = 'single';
/*

### Asynchronous modules
By default modules loaded with 'require()' and 'import' are synchronous and therefore are injected into the files that require them (unless you manually choose to output them as chunks),
but modules loaded with 'import()' are meant to be asynchronous, so they always need to be output as separate chunks. This happens automatically and you only need to customize the settings:

1. if you're transpiling js using Babel, you need to install the 'syntax-dynamic-import' plugin, otherwise import() statements will throw an error

2. by default the file names follow the same rules as entry files, except that [name] is replaced with [id]. You can customize this under output.chunkFilename
	- at least according to the documentation, but it doesn't seem to be working properly
	- you can use the extra webpack settings explained in the following section to set the name of individual chunks
	- the final name may be processed further by the rules defined on the 'splitChunks' settings explained later

### Asynchronous modules - Extra webpack settings
Within each import() call you can pass extra parameters that webpack understands.
Since these parameters are not standard, they need to go inside a js comment like this: import(/* webpackChunkName: 'chunk-name' *\/ 'module-name')
you can add multiple parameters inside the same comment line by separating them with a comma.

webpackChunkName: 'chunk-name'				Replace the standard id number with a custom name for the chunk. You can use the keywords:
											[index]		increment number
											[request]	resolved filename
webpackMode: 'lazy'							Defines whether or not to send a network request for the module
											lazy		lazy-loads the chunk on every import() call. Default setting
											lazy-once	lazy-loads the chunk only once and reuses it for all future import() calls
											eager		doesn't create a separate chunk, the code gets injected into the requesting file
											weak		only loads the module if it has already been loaded before, otherwise it fails. Never sends new network requests
webpackPrefetch: true						Whether or not to 'prefetch' the module (loads it in advance with low priority, during idle time)
webpackPreload: true						Whether or not to 'preload' the module (loads it in advance with medium priority, at the same time as the initial scripts)

you can use variables to dynamically select the modules to load, e.g. import(`./locale/${language}.json`), which causes this behaviour:
- the path needs to be specific, not variable, otherwise you'll get an error
- webpack will bundle together ALL files that can potentially match that path, even if some end up not actually being used (there's no way for webpack to know this in advance)
- to trim down the number of modules bundled in the chunk, use the following settings:

webpackInclude: regex						include only modules that match the regex
webpackExclude: regex						exclude modules that match the regex

### Synchronous modules
If you import a (non asynchronous) module inside different files, its code will be injected on each of the requesting files. For small modules this is good as you reduce the number of necessary server requests, but for bigger modules this becomes an issue as you're substantially increasing the total file size with repeated code.

To create chunks in these cases you can configure the settings in the 'optimization.splitChunks' object:
*/
webpackConfig.optimization.splitChunks = {
	chunks: 'all',							// selects the kind of modules that will follow the rules defined here
											// async	only async modules. This is the default value
											// initial	only non-async modules. Note that async modules always generate chunks anyway, they just won't follow the rules defined here
											// all		all modules
	// name: true,							// set the file names for the chunks, if set to 'true' the name will be automatically generated
	// automaticNameDelimiter: '~',			// automatically generated names include the names of all modules contained in the chunk separated by the character defined here
	minSize: 1,								// the minimum file size required to justify creating a chunk. defaults to 30000
	minChunks: 1,							// the minimum number of times a module needs be imported to justify creating a chunk for it. defaults to 1
	maxAsyncRequests: 5,					// not sure lol. defaults to 5 ???
	maxInitialRequests: 3,					// not sure lol. defaults to 3 ???
	cacheGroups: {							// defines how many chunks to create and their settings. Keys represent the name of each chunk
		// the following settings are the ones set by default by webpack, except for the names:
		vendors: {
			name: 'modules/vendor',
			test: /[\\/]node_modules[\\/]/,	// regex that modules should match to be included on the chunk
			priority: -10,					// chunks that match multiple groups will go to the one with higher priority
		},
		default: {
			name: 'modules/common',
			minChunks: 2,
			priority: -20,
			reuseExistingChunk: true,		// ???
		},
	},
}
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
