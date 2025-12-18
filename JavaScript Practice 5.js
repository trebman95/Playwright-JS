// Functions

function getReminder() {      // function declaration - anonymous
    console.log('Water the plants.')
}

function greetInSpanish() {
    console.log('Buenas tardes.')
}

getReminder();
greetInSpanish();


let name = 'Tre'

function sayThanks(name) {
    console.log('Thank you for your purchase, ' + name + '! We appreciate your business.');
}

sayThanks('Cole')


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {   // Default parameters
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();


function monitorCount(rows, columns) {
    return rows * columns
}

const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)


function monitorCount(rows, columns) {   // Helper functions
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost)


const plantNeedsWater = function plantDay(day) {    // Function Expressions - NOT anonymous
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'))



const overWeight = (weight) => {      // Arrow functions
    if (weight > 200) {
        return true
    } else {
        return false
    }
};

console.log(overWeight(250))



const takingPills = day => day === 'Wednesday' ? true : false;    // Concise Arrow Body fucntions
console.log(takingPills('Friday'))
