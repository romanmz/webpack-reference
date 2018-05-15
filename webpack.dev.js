/*


Reusable Settings
------------------------------
You can create separate config files to be used on different environments,
to reuse the default settings you can simply import the file, modify the returned object, and re-export the settings
the webpack-merge function helps make it a bit more readable by accepting a new object with only the changes you need

1. Install webpack-merge
$ npm i --save-dev webpack-merge

2. Update the config object
*/
const merge = require('webpack-merge');
const defaultSettings = require('./webpack.config.js');
module.exports = merge( defaultSettings, {
	devtool: 'inline-source-map',
});
