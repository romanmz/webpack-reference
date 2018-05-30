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
module.exports = ({sourceDir}) => {
	return {
		module: {
			rules: [
				{
					test: /\.csv$/,
					include: sourceDir,
					use: ['csv-loader'],
				},
				{
					test: /\.xml$/,
					include: sourceDir,
					use: ['xml-loader'],
				}
			]
		}
	}
}
/*

3. In your js code simply call require() or import the same way you do with js files.
*/
