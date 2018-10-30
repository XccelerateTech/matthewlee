const EventEmitter = require('events');

class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello there';
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`);
        // this.emit('greet', data);
    }
}

const greeter = new Greeter();

greeter.on('greet', function(data) {
    console.log('Someone greeted '+ data);
});

greeter.greet('Ian');