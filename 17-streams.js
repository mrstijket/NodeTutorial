// create big.txt file

// const { writeFileSync } = require('fs');
// for (let i = 0; i < 100000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', { highWaterMark: 100000 });

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => {
  console.log(err);
});