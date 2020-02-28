// -------------------------- Importing Core Modules --------------------------- //

// This part explores the fact that how there are some core modules which are available globally on nodejs and we can use them without requiring 
// Also there are some core modules like fs which require to be required or loaded before using.

// const fs = require('fs');

// if we change the second argument the initial text will be replaced by the new text.
// fs.writeFileSync('notes.txt','This text file was created with nodejs!');

// Challenge append the text to the text file using appendFileSync method of fileSystem module

// fs.appendFileSync('notes.txt','\nThis file was created by Shishir Jha.\nThis is the first challenge of the course.');


// -------------------------- Importing Created Modules --------------------------- //

// When we use require to import our own modules, we need to provide relative path.

// when we call require method directly as shown below, it directly executes the concerned file.
require("./utils.js");
const name = "Shishir";

console.log(name);

