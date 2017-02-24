
function done() {
  console.log('Goodbye.');
  process.exit();
}


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(str) {
  str = str.trim();
  if (str === 'q' || str === 'quit') {
    console.log('Goodbye.');
    process.stdin.pause();
  } else {
    console.log(str);
  }
});


process.on('SIGINT', done);




