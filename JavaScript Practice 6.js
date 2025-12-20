// Blocks & Scope

const city = "New York City";

const logCitySkyline = () => {
    let skyscraper = "Empire State Building";
    return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());



const satellite = "The Moon"; // Global Scope
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
    return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};

console.log(callMyNightSky());



const logVisibleLightWaves = () => {   // Block Scope
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}

logVisibleLightWaves();



const cousin1 = 'Brandon';
const cousin2 = 'Bryce';
let dog = 'Rosco';

const bringBackFamily = () => {
    dog = 'Pablo'       // SCope Pollution (Bad way to maintin code)
    console.log(`I want my cousins ${cousin1} and ${cousin2} to meet ${dog}`)
}

bringBackFamily();



const runMarathon = () => {  // Tightly Scoping - Great Practice!
    let runner = 'Scotty';
    let location = 'Charlotte'

    if (location === 'Charlotte') {
        let runner = 'James';
        console.log(runner)
    }
    console.log(runner)
}

runMarathon()
