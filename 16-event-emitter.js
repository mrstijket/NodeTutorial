const eventEmitter = require('events');
const http = require('http');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log('some other logic here');
});

// emit should be after on (order matters)
customEmitter.emit('response', 'john', 34);



// event emitter can be used with http

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);