/*


Webpack Configuration File
==================================================
Documentation: https://webpack.js.org/configuration/


Configuration Object
------------------------------
You can export a configuration object or a function that returns an object,
using a function allows you to capture the 'env' object which contains environment variables
*/
module.exports = env => {
	let webpackConfig = {
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


	Env Variables
	------------------------------
	*/
	const isDevEnv = process.env.NODE_ENV !== 'production';
	const useHMR = env && env.useHMR;
	const sourceDir = __dirname+'/src';
	const distDir = __dirname+'/dist';
	const distFileNames = isDevEnv ? '[name]' : '[name].[hash]';
	const envVars = {isDevEnv, useHMR, sourceDir, distDir, distFileNames};
	/*


	Merging Settings
	------------------------------
	You can create separate config files to be used on different environments,
	to reuse the default settings you can simply import the file, modify the returned object, and re-export the settings
	the webpack-merge function helps make it a bit more readable by accepting a new object with only the changes you need

	1. Install webpack-merge
	$ npm i --save-dev webpack-merge

	2. Load the function and use it to merge different config objects
	*/
	const merge = require('webpack-merge');
	const entryFiles = require('./webpack/03.entry-files.js')( envVars );
	const transpileJs = require('./webpack/04.transpile-js.js')( envVars );
	const importFiles = require('./webpack/05.import-files.js')( envVars );
	const copyFiles = require('./webpack/06.copy-files.js')( envVars );
	const transpileSass = require('./webpack/07.transpile-sass.js')( envVars );
	const generateHtml = require('./webpack/08.generate-html.js')( envVars );
	const splitJs = require('./webpack/09.split-js.js')( envVars );
	const liveReload = require('./webpack/10.live-reload.js')( envVars );
	const sourceMapsSetting = {devtool: isDevEnv ? 'inline-source-map' : 'source-map'};
	webpackConfig = merge( webpackConfig, entryFiles, transpileJs, importFiles, copyFiles, transpileSass, generateHtml, splitJs, liveReload, sourceMapsSetting );
	/*


	Export Config Settings
	------------------------------
	Finally, export the configuration object to make it available for other scripts:
	*/
	return webpackConfig;
}
