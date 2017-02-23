var cp = require('child_process');


var cmd = cp.spawn('echo', ['Hello world!']);


cmd.stdout.on('data', (data) => {
  console.log(`Data: ${ data }`);
});

cmd.stderr.on('data', (data) => {
  console.error(`Error: ${ data }`);
});

cmd.on('close', (code) => {
  console.log(`Child process exited with code: ${ code }`);
});











