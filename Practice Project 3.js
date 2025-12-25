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




const listOfGames = ['Fortnite', 'The Last of Us', 'Madden 2025', 'NBA 2K11', 'FIFA 2013', 'Star Wars Jedi: Fallen Order']

/*
console.log(listOfGames.slice(0, 2));
console.log(listOfGames.shift());
console.log(listOfGames.pop());
console.log(listOfGames.length);
console.log(listOfGames.slice(2, 4));

listOfGames.unshift('Gears of War');
console.log(listOfGames)
*/

const addingGames = (arr) => {
    if (Array.isArray(arr)) {
        arr.unshift('Gears of War')
    }

    return arr
}

console.log(addingGames(listOfGames))
