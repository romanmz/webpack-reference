/*


Webpack Basics
==================================================
Based on: https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70


Node.js - JavaScript Runtime
------------------------------
Runs server-side JavaScript code.
Installation: https://nodejs.org/
Documentation: https://nodejs.org/dist/latest-v10.x/docs/api/


NPM - Package Manager
------------------------------
Allows you to easily keep track, download and update the js libraries required by your projects. This also makes your code repositories smaller and cleaner as you only need to include the package.json file instead of the full code of the used libraries. You can publish your own projects and share them with other deveopers.
Installation: Comes included with Node.js
Documentation: https://docs.npmjs.com/
Others: Bower and Yarn

### Setting up a project
$ npm init									Creates a package.json file on your project where you can define basic information and a list of dependencies
$ npm install moment --save-prod			This downloads the package 'moment' from the npm repository, copies it to the 'node_modules' folder on the current project,
											and adds it to the list of dependencies on package.json
											the --save-prod flag indicates that you’ll use this dependency only on your dev environment, but don’t need to output it for production
$ npm install								Downloads and installs all the projects' dependencies based on its package.json file
											you can share just this file with other devs, and they’ll be able to download all the necessary dependencies to run your code


Webpack - Module Bundler
------------------------------
In Node.js you can import dependencies inside js files using the 'require' statement, but this is not supported on web browsers as they don't have access to the file system, so to be able to use this feature on your web projects you'll need to run a build task that detects dependencies and injects them all into a single file you can use for web. This is what a module bundler does.
Documentation: https://webpack.js.org/api/cli/
Others: CommonJS, Browserify

### Installing webpack
$ npm i --save-dev webpack webpack-cli		You need both webpack and webpack-cli, the 'i' keyword is a shortcut for 'install'

### Running webpack
$ ./node_modules/.bin/webpack				The webpack script will be stored inside the node_modules folder, to call it you need to enter its full path

Having to write the full path every time is not very practical, you can create a npm 'shortcut' by defining a 'script' on the package.json file
When defining a shortcut you don't need to enter the full path to the webpack script, you can simply refer to it as 'webpack'
"scripts": {
	"build": "webpack --progress"
}

$ npm run build								You can now run webpack with the arguments defined on the shortcut by simply typing 'npm run' plus the name of the shortcut

### Bundling files
$ webpack source1.js source2.js -o dist.js	This command instructs webpack to take two source files, bundle all their dependencies, and output a single distribution file
$ webpack									If you run webpack without any arguments, it will look for an input file in './src/index.js' and will output to './dist/main.js'

### Using configuration files
To make configuration easier and cleaner, you can define the settings in a configuration file
$ webpack									Calling webpack without any arguments will look for a default configuration file named 'webpack.config.js'
$ webpack --config example.config.js		Or you can specify a different file by adding a --config flag

### Sample modifier flags
$ webpack --watch							Automatically runs webpack every time any of the input files changes, this way you don't have to manually re-run the tasks
$ webpack --progress						Outputs a progress indicator while running the tasks
$ webpack -d								Shortcut for development settings: --debug --devtool cheap-module-eval-source-map --output-pathinfo
$ webpack -p								Shortcut for production settings: --optimize-minimize --define process.env.NODE_ENV="production"
$ webpack --env.platform=web				Sets environment variables
$ webpack --mode=development				Sets the 'mode' tasks should use, can be 'development' or 'production'. Defaults to 'production'


Code Transpilers
------------------------------
Transpilers are scripts that take files using the latest syntax of a language and automatically converts them to use an older syntax for better browser support (looking at you IE).
Webpack allows you to run code transpilers while bundling scripts.

Examples for CSS
⁃ SASS
⁃ LESS
⁃ Styles

Examples for JavaScript
⁃ Babel
⁃ CoffeeScript
⁃ TypeScript


Task Runners
------------------------------
Task runners are scripts that automate different parts of the build processs (minifiying code, optimise images, run tests, etc)
You can use webpack as a task runner by adding 'loaders' (scripts that run while processing bundled files) and 'plugins' (scripts that run on the resulting bundle files)
Others: Grunt, Gulp


*/
