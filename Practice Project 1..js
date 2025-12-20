/*
///////////////////////////////////////FIRST Try////////////////////
// Forecast today is 293 Kelvin
const kelvin = 293;
// Converting Kelvin to Celsius
let celsius = kelvin - 273;
//Calculate Farenheit
let farenheit = celsius * (9 / 5) + 32;
//Converting Celsius to Farenheit
farenheit = Math.floor(farenheit);
//String Interpolation for Farenheit
console.log(`The temeperature is ${farenheit} degrees Farenheit.`);

//Convert Celsius to the Newton scale
let newton = celsius * (33 / 100);
//Round down the Newton Temperature
newton = Math.floor(newton);
//String Interpolation for Newton
console.log(`The temperature is also ${newton} degrees Newton`);
*/

//////////////////////////////////////////CLEANER VERSION/////////////

// Forecast today is 293 Kelvin
const kelvin = 293;
// Celsius = Kelvin - 273
const celsius = kelvin - 273;
// Farenheit = celsius * (9 / 5) + 32
const farenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temeperature is ${farenheit} degrees Farenheit.`);

// Newton = celsius * (33 / 100)
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is also ${newton} degrees Newton`);
