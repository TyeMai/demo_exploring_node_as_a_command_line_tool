var one = require('./sub_modules/one');
var two = require('./sub_modules/two');

var _name = 'My Module';


module.exports = {
  one: one,
  two: two,
  getName: function() {
    return _name;
  }
};




