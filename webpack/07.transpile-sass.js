/*


Transpiling SASS Files
------------------------------
$ npm i --save-dev css-loader				loader for css files (imports them as simple text strings)
$ npm i --save-dev style-loader				embeds loaded css as <style> tags (using js), supports HMR
$ npm i --save-dev mini-css-extract-plugin	outputs loaded css as separate files and adds the correct <link> tags on the generated html code
$ npm i --save-dev node-sass sass-loader	transpiles scss/sass files into css (node-sass is required by sass-loader)
*/
module.exports = ({isDevEnv, useHMR, sourceDir, distFileNames}) => {
	const miniCssExtractPlugin = require('mini-css-extract-plugin');
	return {
		module: {
			rules: [
				{
					test: /\.(css|sass|scss)$/,
					include: sourceDir,
					use: [
						useHMR ? 'style-loader' : miniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								url: false,					// set to false to disable module loading of url() resources
															// !!! if left as true, the resource urls will be broken if you output the css files to a subfolder instead of the main output folder
															// !!! if set to false, the resource urls could break if they are pointing to files processed by loaders like file-loader if the file names can change on every build (e.g. hashes)
															// !!! best practice for now is to set this to false, and make sure any assets loaded from the css have constant file names
								import: true,				// set to false to disable module loading of @import statements
								// minimize: !isDevEnv,		// set to true to minimze the css code. for extra settings check: http://cssnano.co/guides/presets/
								sourceMap: isDevEnv,		// set to true to generate source maps (warning: they can be slow and buggy)
							}
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'expanded',	// nested*, expanded, compact, compressed
								sourceMap: isDevEnv,
							}
						}
					],
				}
			]
		},
		plugins: [
			new miniCssExtractPlugin({
				filename: 'css/'+distFileNames+'.css',
			})
		]
	}
}
