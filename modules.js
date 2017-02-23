// 1.
// console.log('exports', exports);
// console.log('require', require);
// console.log('module', module);
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);


// 2.
var myModule = require('./my_module');
console.log(myModule);
console.log(myModule.getName());
console.log(myModule.one.getName());
console.log(myModule.two.getName());

var one = require('./my_module').one;
console.log(one.getName());


// 3.
var moduleWithParams = require('./module_with_params')({ lang: 'es' });

moduleWithParams.sayHello();





