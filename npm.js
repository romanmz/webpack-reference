/*


NODE.JS and NPM
==================================================
Download installer for both from: https://nodejs.org/en/download/


GENERAL COMMANDS
------------------------------
node -v											// checks the version number of node.js
npm -v											// checks the version number of npm
npm												// shows all commands available on npm
npm <command> -h								// shows a description of a particular command
npm config get prefix							// shows you the directory being used to install global packages and CLI commands
npm config ls									// lists your current config settings
npm install npm@latest -g|--global				// updates npm to the latest version, the -g (--global) flag instructs it to install it as a global package rather than a local one on the current folder


CREATING A PROJECT
------------------------------
npm init										// creates a new node project, allows you to define some metadata and creates a package.json file
npm init [-y|--yes]								// if you add the --yes flag, npm will automatically fill in all the data with default values
npm init --scope=myusername						// init a project using a scope

npm set init.author.email "email@email.com"		// manually set project meta data
.npm-init.js									// you can customize the init process by creating and configuring a .npm-init.js file, but not having a look at that for now (???)


INSTALL / UNINSTALL PACKAGES
------------------------------
npm install										// this command will look up for the list of dependencies defined in package.json and download any packages as required
npm install <pkg>[@<version|tagname>]
							[-g|--global]		// the --global flag installs the package globally (use this for packages to be used on CLI, otherwise install locally)
							[--save]			// the --save flag instructs npm to add the package to the list of dependencies on package.json
							[--save-dev]		// similar, but for adding the package as dev dependency
npm uninstall [-g] <pkg>


MANAGING LOCAL PACKAGES
------------------------------
npm ls											// lists the list of installed packages, marking the ones that are no in sync with the dependencies listed on package.json:
													// UNMET DEPENDENCY: packages listed on package.json, but not currently installed
													// EXTRANEOUS: packages installed but not listed as dependencies
npm outdated									// displays the list of installed packages that have an update available
npm update										// updates all packages
npm uninstall <pkg>								// uninstalls the specified package (but keeps it as a dependency on package.json)
npm uninstall <pkg> --save|--save-dev			// uninstalls the package, and also removes it from package.json when using --save or --save-dev (depending on what type of dependency it is)
npm prune										// deletes all 'extraneous' packages


MANAGING GLOBAL PACKAGES
------------------------------
npm ls -g --depth=0								// lists all installed global packages
npm outdated -g --depth=0						// detect outdated global packages
npm update -g									// updates all global packages
npm update <pkg> -g|--global					// updates an individual package
npm uninstall <pkg> -g							// uninstalls a global package


USING A PACKAGE
------------------------------
in node:
var package-nm = require('package-name');


EXPORTING A PACKAGE
------------------------------
package.json
{
	"main": "index.js",
	"author": "Your Name <email@example.com> (http://example.com)",
	"dependencies": {							// packages required by your application in production
												// format for version numbers is called 'semver' (semantic versioning)
		// patches only
		"package": "~1.0.0",
		"package": "1.0.x",
		
		// minor releases only
		"package": "^1.0.0",
		"package": "1.x",
		
		// major releases
		"package": "*",
		"package": "x"
	},
	"devDependencies": {						// packages you only need during development and testing
	}
}

index.js
exports.testFunction = function(){}				// function to be made available when someone imports the package using 'require()'


PUBLISHING TO THE REGISTRY
------------------------------
npm adduser										// creates a new user
npm login										// if you already have a user, logs in and stores its details
npm publish										// publish to the registry
npm publish --access=public						// manually set the access level of the package (this option remains set for all subsequent publishes, of the same package???)
												// if you've made changes and try to publish, you'll get an error if you haven't updated the version number, you can update it manually on package.json, or:
npm version <type>								// bumps the version number to the next number
	patch										// 1.0.1 (bug fix, no functionality changes)
	minor										// 1.1.0 (new functionality, but without changing or breaking existing functionality)
	major										// 2.0.0 (breaking changes)
												// if the package has a linked git repo, this command will add a new tag to it

.gitignore | .npmignore							// all files in the folder will be published except for the ones defined in these two files


SCOPED PACKAGES
------------------------------
packages can be published under a scope, which should be your own user name
a scope is defined starting with @ and ending with / e.g: @myusername/mypackage

- you can manually set it on package.json
- or using npm init with a --scope=myusername flag
- you can define it in your settings so you don't have to specify it every time:
	npm config set scope myusername

scoped packages are private by default, if you want to publish it as public you need to specifically add the --access flag when publishing the package

To change the access of an existing package:
npm access <accesslevel> [<pkg>]


TAGGING RELEASES
------------------------------

MANAGING TAGS:
npm dist-tag add <pkg>@<version> [<tag>]		// if you don't specify a tag, then the default one will be used from your configuration
npm dist-tag rm <pkg> <tag>						// removes a tag
npm dist-tag ls [<pkg>]							// lists all tags of a package (defaults to the current package)

DURING PUBLISHING:
npm publish --tag tagname						// by default packages are tagged as 'latest' during publish, you can change it with the --tag flag

INSTALL FROM A TAG
npm install <pkg>@<tagname>


UPDATING PROFILE
------------------------------
npm profile get									// displays a table with your full details
npm profile set <prop> <value>

npm set password								// prompts you to change your password


OTHER ???
------------------------------
two-factor authentication
tokens
