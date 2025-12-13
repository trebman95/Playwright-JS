// My Age
let myAge = 30;
myAge = 35;
//This value will change for early years
let earlyYears = 2;
earlyYears *= 10.5;
// Calculate for later years after early years
laterYears = myAge - 2;
// Calutate the number of dog years and assign back to later years in one step
laterYears *= 4;
// Add early and later years to calcute your age in dog years
myAgeInDogYears = earlyYears + laterYears;
// Lowercase your name
let myName = "Tre".toLowerCase();
// Create a message about your age in dog years
console.log(
    `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears}.`
);
