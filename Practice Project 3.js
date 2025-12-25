const gameConsoles = (consoles) => {
    if (consoles === 'Xbox') {
        console.log('I have an Xbox')
    } else if (consoles === 'Playstation') {
        console.log('I have a Playstation')
    } else {
        console.log('I got gamecast')
    }
};

gameConsoles('Xbox');
gameConsoles('Playstation');
gameConsoles(NaN)

const gamePrices = (game) => {
    let price = 0

    if (typeof game === "string") {
        price = 50
    } else {
        price = undefined
    }

    return price
};

console.log(gamePrices('Madden'));
console.log(gamePrices(20.47));
