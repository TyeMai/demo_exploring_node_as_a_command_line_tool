
var _config;
var _langs = {
  en: 'Hello world!',
  es: 'Hola mundo!'
};

module.exports = function(config) {
  var _config = config;

  var moduleWithParams = {};

  moduleWithParams.sayHello = function() {
    console.log(_langs[_config.lang]);
  };

  return moduleWithParams;
};





