var fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log(`
  Welcome to the super simple text editor!
  Type \\q at any time to quit
`);
var data = '';

process.stdin.on('data', function(str) {
  if (str.trim() === '\\q') {
    if (!fs.existsSync('./data')) {
      fs.mkdirSync('./data');
    }

    fs.writeFile('./data/input.txt', data, function(err) {
      if (err) {
        console.error(err);
      }

      process.exit();
    });
  } else {
    data += str;
  }
});





