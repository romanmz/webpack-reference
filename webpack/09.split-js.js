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

webpackConfig.optimization.runtimeChunk = 'single';

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
module.exports = ({useHMR}) => {
	if( useHMR ) {
		return {};
	}
	return {
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
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
					/*
					// you can define chunks that include all files loaded by a particular entry point, and output them to a single file
					// for example, to output all css from a given entry point:
					// 1. first add this function at root:
					function recursiveIssuer(m) {
						if(m.issuer) return recursiveIssuer(m.issuer);
						else if(m.name) return m.name;
						else return false;
					}
					// 2. add a cache group using a test function (replace 'entryname'):
					styles: {
						name: 'styles',
						test: (m, c, entry='entryname') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
						chunks: 'all',
						enforce: true,
					},
					*/
				},
			}
		}
	}
}
