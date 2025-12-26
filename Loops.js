// Loops

for (let i = 5; i < 11; i++) {                                           // For Loop
    console.log(i)
}




for (let counter = 3; counter >= 0; counter--) {                       // Reverse Loop
    console.log(counter)
}



const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {                          // Iterating through an Array
    console.log(`I would love to visit ${vacationSpots[i]}`)
}




let bobsFollowers = ["James", "Willis", "Paul", "Tim"];  // Nested Array Loop
let tinasFollowers = ["Becky", "James", "Paul"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i])
        }
    }
}

console.log(mutualFollowers)




const cards = ["diamond", "spade", "heart", "club"];    // The While Loop
let currentCard;

while (currentCard !== "spade") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}




let cupsOfSugarNeeded = 5;  // Do...While Loop
let cupsAdded = 0;

do {
    cupsAdded += 1
    console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded)




const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    if (rapperArray[i] === "Notorious B.I.G.") {
        console.log(rapperArray[i])
        break
    }
}

console.log("And if you don't know, now you know.")
