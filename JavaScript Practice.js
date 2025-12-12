// Data Types, String Contatenation, Properties, & Built-In Objects
console.log('JavaScript');
console.log(2011);
console.log('Woohoo I love to code! #codecademy');
console.log(20.49);
console.log('Hello' + ' ' + 'World');
console.log('Teaching the world how to code'.length);
console.log("Codecademy".toUpperCase());
console.log(Math.floor(Math.random() * 100));
console.log(Number.isInteger(2017));

//Variables(var, let, const), Math Assignment Operators String Interpolation, typeof, etc.
var numOfSlices = 8;
var favoriteFood = 'pizza';
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
//entree = 'Tacos';
//console.log(entree);

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);
