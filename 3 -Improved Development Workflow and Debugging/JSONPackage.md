### Basics

To initialize a package.json file, type **npm init** into the console and it will prompt you with some information that you have to fill in. After going through the prompts your **package.json** will be created.

The main section of the JSON file is the scripts section, where you can type commands which can create shortucts to run your code. On default or as a special case, **npm start** allows you to run your **index.js** or **app.js**. This is a special keyword however, if you ever wanted to use any other script command then you have to write **npm run <command_name>**.

### Installing third party packages using npm

Along with the core modules provided by NodeJS, we will of course also need the help of third party packages at times. To install these third party packages we can use Node's package manager **npm** by using a command **npm install** to install whatever packages we need. **npm** handles all this for us, we just need to type in the command.

When installing there are multiple options that you can use to install.

1. You can save it as a developement dependency (using --save-dev) which means that you are using it only for development.
2. You can save it as a production dependency (using --save) which means that you are using it for production purposes.
3. You can save it globally (using -g) which installs it globally to your machine instead of only installing it for that project

When doing any of these options, it is downloading from the npm repository and then installing it into the project or globally (depending on the options that you have put).

These packages will be listed in your **package.json** file. If you have saved it as a developement dependency, it will be saved unded **devDependencies** object in your **package.json** file. Similar for the other type of options you have installed it as.

If the package that we are installing has any dependencies, those will also automatically installed. Because, typically these packages also have a package.json file which has a list of dependencies. All of these are stored in the **node_modules** folder (the package we installed and its dependencies and so on).

nodemon is a package which auto starts the server when we change something in the code and save it. This helps us by removing the tedious action of stopping and restarting the server manually.
