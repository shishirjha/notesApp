// This part explores the fact that how there are some core modules which are available globally on nodejs and we can use them without requiring 
// Also there are some core modules like fs which require to be required or loaded before using.

const fs = require('fs');

// if we change the second argument the initial text will be replaced by the new text.
fs.writeFileSync('notes.txt','This text file was created with nodejs!');