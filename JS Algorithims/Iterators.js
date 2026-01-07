// Iterators
const fruits = ["mango", "papaya", "pineapple", "apple"];       // for.Each

fruits.forEach((fruits) => console.log(`I want to eat a ${fruits}`));

const jury = ["John", "Jacob", "Adam", "Jordan"];

function juryNames(names) {
    console.log(`${names} is part of the jury`)
};

jury.forEach(juryNames);



const animals = ["Hen", "elephant", "llama", "leopard",          // .map()
    "ostrich", "Whale", "octopus", "rabbit", "lion", "dog",
];
const secretMessage = animals.map((animal) =>
    typeof animal === "string" ? animal[0] : ""
);

console.log(secretMessage.join(""));




const bigNumbers = [100, 200, 300, 400, 500];             //  .filter()
const smallNumbs = bigNumbers.map((number) => {
    return number / 100;
});

console.log(smallNumbs);


const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(nums => nums < 250)

console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(words => words.length > 7)

console.log(longFavoriteWords)



const creatures = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];   // .findIndex()

const foundAnimal = creatures.findIndex(mammals => {
    return mammals === 'elephant'
});

const startsWithS = creatures.findIndex(oneLetter => {
    return oneLetter[0] === 's'
});

console.log(foundAnimal)
console.log(startsWithS)



const newNumbers = [1, 3, 5, 7];  //  .reduce()
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log("The value of accumulator: ", accumulator);
    console.log("The value of currentValue: ", currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum)
