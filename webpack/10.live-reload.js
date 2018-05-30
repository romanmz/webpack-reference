/*


Live Reloading / Hot Module Replacement
------------------------------
1. Install webpack dev server
$ npm i --save-dev webpack-dev-server

2. Configure the server settings, including the HMR plugin if necessary
*/
const webpack = require('webpack');
module.exports = ({distDir}) => {
	return {
		devServer: {
			contentBase: distDir,				// should point to the web root folder
			hot: true,							// enable hot module replacement
			inline: true,						// if hmr fails, then reload the full page
		},
		plugins: [ new webpack.HotModuleReplacementPlugin() ],
	}
}
/*

3. If you want to use hot module replacement, use the js methods made available in the module.hot object
- see the ./src/index.js file for examples

4. Add a new shortcut in package.json to call the dev server
"scripts": {
	"server": "webpack-dev-server --mode=development --open"
},

5. Finally, run the server
$ npm run server


*/
