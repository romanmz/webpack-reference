/*


Copying Files
------------------------------
There's also a generic file loader that allows you to grab files from the source folder, copy them to the output folder, and retrieve the final urls from within your js code.
This can also be used to make any kind of files available for other loaders and plugins.

1. Install the loader
$ npm i --save-dev file-loader

2. Add the module rules
*/
module.exports = ({sourceDir, distFileNames}) => {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|jpeg|png|gif|svg)$/,
					include: sourceDir,
					use: {
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: distFileNames+'.[ext]',
						}
					},
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					include: sourceDir,
					use: {
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: distFileNames+'.[ext]',
						}
					},
				}
			]
		}
	}
}
