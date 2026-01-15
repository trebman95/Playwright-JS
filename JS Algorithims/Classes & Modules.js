// Classes

class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);



class Surgeon {        // Instances - new
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')
console.log(surgeonRomero.name)
console.log(surgeonJackson.department)



class Doctor {     // Methods
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const doctorJames = new Doctor('James Brown', 'Cardiovascular');
const doctorHendrix = new Doctor('Jimi Hendrix', 'Orthopedics');
console.log(doctorHendrix.name);
doctorHendrix.takeVacationDays(12);
console.log(doctorHendrix.remainingVacationDays);
