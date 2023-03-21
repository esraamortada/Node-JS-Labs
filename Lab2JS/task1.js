const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }
  
  emitData(data) {
    console.log('Data emitted:', data);
    this.emit('data', data);
  }
}

module.exports = MyEmitter;
