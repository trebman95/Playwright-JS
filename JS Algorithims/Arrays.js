// Arrays

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];

console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])



let groceryList = ['bread', 'tomatoes', 'milk']; // Updating elements in a array
groceryList[1] = 'avocados';

console.log(groceryList)



let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"]; // Reassigning arrays
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
condiments = ["Mayo"];
utensils[3] = "Spoon";

console.log(condiments);
console.log(condiments);
console.log(utensils);



const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];  // Practicing .length

console.log(objectives.length)



const chores = ['wash dishes', 'do laundry', 'take out trash']; // Array.push()

chores.push('mow the lawn', 'cut the grass');
console.log(chores)



const errands = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor']; // Array.pop() - removes the last element
const removed = errands.pop();

console.log(errands)
console.log(removed)



// Array.shift(), Array. unshift(), Array.slice(), Array.pop, Array.indexOf
const groceryNote = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryNote.indexOf('pasta');      // index of an array

groceryNote.shift(0)       // removes the first item from the array
groceryNote.unshift('popcorn')      // adds an item to the beginning of an array

console.log(groceryNote.slice(1, 4))      // prints specific items
console.log(groceryNote)
console.log(pastaIndex)



const concept = ['arrays', 'can', 'be', 'mutated'];    // Arrays with functions

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

const removeElement = (newArr) => newArr.pop()
removeElement(concept)
console.log(concept)



const numberClusters = [[1, 2], [3, 4], [5, 6],    // Nested Arrays
];

const target = numberClusters[2][1]
console.log(target)
