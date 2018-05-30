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
module.exports = ({sourceDir, distDir, distFileNames}) => {
	return {
		entry: {
			main: sourceDir+'/index.js',
			home: [sourceDir+'/home1.js', sourceDir+'/home2.js'],
		},
		output: {
			filename: distFileNames+'.js',
			path: distDir,
		}
	}
}
