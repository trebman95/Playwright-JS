// Advanced Objects

const robot = {         // this keyword - calling object
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
};

console.log(robot.provideInfo())


const robots = {            // getter method
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`
        } else {
            return 'System malfunction: cannot retrieve energy level'
        }
    }
};

console.log(robots.energyLevel)



const robo = {               // setter method
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },

    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};

robo.numOfSensors = 100
console.log(robo.numOfSensors)



const robotFactory = (model, mobile) => {   // Factory Functions
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}

const tinCan = robotFactory('P-500', true)
tinCan.beep()


const R2D2 = {       // Destructured Assignment
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = R2D2;
console.log(functionality.beep())



const droid = {        // Built-In Object Methods
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// Object.keys()
const droidKeys = Object.keys(droid);
console.log(droidKeys);

// Object.entries()
const droidEntries = Object.entries(droid)
console.log(droidEntries);

// Object.assign()
const laserVoice = { laserBlaster: true, voiceRecognition: true }
const newDroid = Object.assign(laserVoice, droid)
console.log(newDroid);
