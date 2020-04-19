const { sayHello, sayGoodbye } = require('./functions');
const fs = require('fs');
sayHello('Hoàng');
sayGoodbye('Hoàng');
const nametxt = fs.readFileSync('./name.txt', 'utf-8');
console.log(nametxt);
const newName = nametxt.toUpperCase();
fs.writeFileSync('./new-name.txt', newName);