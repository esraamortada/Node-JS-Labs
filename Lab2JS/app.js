const MyEmitter = require('./task1');

const myEmitter = new MyEmitter();

myEmitter.on('data', (data) => {
  console.log('Data received:', data);
});

myEmitter.emitData('Hello, ITI!');
