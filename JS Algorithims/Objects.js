//Objects

let fasterShip = {            // Key-Value
    "Fuel Type": "Turbo Fuel",
    color: "silver"
};

const colorType = fasterShip.color

console.log(colorType)
console.log(fasterShip["Fuel Type"])
console.log(fasterShip)

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

console.log(crewCount);
console.log(planetArray);


let newship = {                        // Reassigning properties
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

newship.color = 'glorious gold';
newship.numEngines = 3;
delete newship['Secret Mission'];


let retreatMessage =       // Object Methods
    "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

const alienShip = {
    retreat() {
        console.log(retreatMessage);
    },

    takeOff() {
        console.log("Spim... Borp... Glix... Blastoff!");
    },
};

alienShip.retreat();
alienShip.takeOff();



let spaceshuttle = {         // Nested Objects
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

const capFave = spaceshuttle.crew.captain['favorite foods'][0];
spaceshuttle.passengers = [{ name1: 'John' }]

const firstPassenger = spaceshuttle.passengers[0]



let spacenut = {        // Passed by Refernce
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
};

let greenEnergy = (obj) => (obj["Fuel Type"] = "avocado oil");

let remotelyDisable = (obj) => (obj.disabled = true);

greenEnergy(spacenut);
remotelyDisable(spacenut);
console.log(spacenut)
