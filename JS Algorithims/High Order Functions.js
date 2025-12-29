//High Order Functions

const addTwo = num => {           // Example of a callback function
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);

    if (checkA === checkB) {
        return func(val)
    } else {
        return 'inconsistent results'
    }
}

console.log(checkConsistentOutput(addTwo, 8));
