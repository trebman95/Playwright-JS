// Functions

function getReminder() {      // function declaration - anonymous
    console.log('Water the plants.')
}

function greetInSpanish() {
    console.log('Buenas tardes.')
}

function favoriteFood() {
    const food = 'tacos';
    console.log(`It's all about dem ${food}!`)
}

getReminder();
greetInSpanish();
favoriteFood();


let name = 'Tre'           // Reassiging parameters

function sayThanks(name) {
    console.log('Thank you for your purchase, ' + name + '! We appreciate your business.');
}

sayThanks('Cole')


let dog = 'Pablo'

function sayDogsName(dog) {
    console.log(`My dogs name is ${dog}.`)
}

sayDogsName('Roscoe');



function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {   // Default parameters
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();


function buyFancyClothes(shirt1 = 'Sean John', shirt2 = 'Roc-A-Wear', shirt3 = 'DKNY') {
    console.log(`I'm rockin ${shirt1}`);
    console.log(`I'm rockin ${shirt2}`);
    console.log(`I'm rockin ${shirt3}`)
}

buyFancyClothes();


function monitorCount(rows, columns) {
    return rows * columns
}

const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)



function costOfMonitors(rows, columns) {      // Helper functions
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost)



function newRoom(width, height) {
    return width * height
}

const roomSize = newRoom(40, 50)
console.log(roomSize)

function costOfRoom(width, height) {
    return newRoom(width, height) * 300;
}






const plantNeedsWater = function plantDay(day) {    // Function Expressions - NOT anonymous
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'))


const imHungry = function whatToEat(munchies) {
    if (typeof munchies === "string") {
        return 'Lets eat!'
    } else {
        return 'You are not really hungry.'
    }
}

console.log(imHungry("burritos"));
console.log(imHungry(17))



const overWeight = (weight) => {      // Arrow functions
    if (weight > 200) {
        return true
    } else {
        return false
    }
};

console.log(overWeight(250))

const findRadius = (diameter) => {
    return diameter / 2
}

console.log(findRadius(3.14));



const takingPills = day => day === 'Wednesday' ? true : false;    // Concise Arrow Body fucntions
console.log(takingPills('Friday'))

const takingMedication = weekday => weekday === 'Friday' ? 'Thank You' : 'Maybe another day';
console.log(takingMedication('Tuesday'));
