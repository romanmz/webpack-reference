/*


Auto-generating HTML
------------------------------
1. Install packages:
$ npm i --save-dev clean-webpack-plugin		deletes an entire folder on each run
$ npm i --save-dev html-webpack-plugin		auto-generates an html file with the correct <script> and <style> tags (useful for cache busting when using hashed file names)

2. Configure webpack:
*/
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = ({rootDir, sourceDir, distDir}) => {
	return {
		plugins: [
			new cleanWebpackPlugin([distDir],{root: rootDir}),
			new htmlWebpackPlugin({
				title: 'Webpack Reference',
				template: sourceDir+'/index.html',
				filename: 'index.html',
			}),
		]
	}
}
