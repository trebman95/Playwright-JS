// Loops

for (let i = 5; i < 11; i++) {                                           // For Loop
    console.log(i)
}

for (i = 10; i < 20; i++) {
    console.log(i)
}

for (j = 1; j < 14; j++) {
    console.log(j)
}



for (let counter = 3; counter >= 0; counter--) {                       // Reverse Loop
    console.log(counter)
}

for (let reverse = 10; reverse >= 4; reverse--) {
    console.log(reverse)
}



const vacationSpots = ['Bali', 'Paris', 'Tulum'];                       // Iterating through an Array

for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`)
}


const jackson5 = ['Tito', 'Michael', 'Jermaine', 'Jackie', 'Marlon'];

for (i = 0; i < jackson5.length; i++) {
    console.log(jackson5[i])
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

console.log(mutualFollowers);



let priority1 = ["eggs", "milk", "soap", "lettuce"];
let priority2 = ["tissue", "soap", "toothpaste"];
let newPrio = [];

for (let p1 = 0; p1 < priority1.length; p1++) {
    for (let p2 = 0; p2 < priority2.length; p2++) {
        if (priority1[p1] === priority2[p2]) {
            newPrio.push(priority1[p1])
        }
    }
}

console.log(newPrio);




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



let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
let newArr = []

for (i = 0; i < groceryList.length; i++) {
    if (groceryList[i] === 'orange juice' || groceryList[i] === 'brown rice') {
        newArr.push(groceryList[i])
    }
}

console.log(newArr)
