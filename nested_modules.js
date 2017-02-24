var myModule = require('./my_module');
console.log(myModule);
console.log(myModule.getName());
console.log(myModule.one.getName());
console.log(myModule.two.getName());

var one = require('./my_module').one;
console.log(one.getName());






