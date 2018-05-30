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
module.exports = () => {
	return {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env'],
							plugins: ['syntax-dynamic-import'],
						},
					},
				}
			]
		}
	}
}
