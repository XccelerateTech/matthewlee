const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    tick(num) {
        this.count = setInterval(() => {
            console.log(`You have ${num} seconds left`);
            this.emit('tick', num);
            num--;
            if (num === 0) {
                setTimeout(() => {
                    console.log("kaboom")
                }, 1000)
                clearInterval(count);
            }
        }, 1000)
    }

    start = (sec) => {
        setTimeout(() => {
            this.tick(num)
        }, sec * 1000);
    }

    pause = (sec) => {
        setTimeout((sec) => {
            console.log(`timer stopped at ${num - sec}th second`)
            clearInterval(this.tick.count);
        }, sec * 1000)
    }

    stop = (sec) => {
        setTimeout((sec) => {
            num += sec;

        }, sec * 1000)
    }




    pause(num) {
        let that = this;
        setTimeout(() => {
            clearInterval(that.tick.count);
        })
    }

    stop(num) {
        let that = this;
        setTimeout(() => {
            clearInterval(that.tick.count);

        })
    }

}



const timer = new Timer();

timer.on('tick', function (num) {
    console.log(`tick! you have ${num} seconds left`)
})

module.exports = timer;
