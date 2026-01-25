// Asynchronous

const inventory = {   // Promise Object
    sunglasses: 1900,
    pants: 1088,
    bags: 1344,
};


const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve("Sunglasses order processed.");
    } else {
        reject("That item is sold out.");
    }
};

const orderSunglasses = () => new Promise(myExecutor);
const orderPromise = orderSunglasses()

console.log(orderPromise)


console.log("This is the first line of code in app.js.");   // setTimeout()

const usingSTO = () => {
    console.log('Hello World')
};

setTimeout(usingSTO, 2000);

console.log("This is the last line of code in app.js.");




function withConstructor(num) {       // async function
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve("zero");
        } else {
            resolve("not zero");
        }
    });
}

withConstructor(0).then((resolveValue) => {
    console.log(
        ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
    );
});


const withAsync = async (num) => {
    if (num === 0) {
        return 'zero'
    } else {
        return 'not zero'
    }
};

withConstructor(0);


withAsync(100)
    .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
    })
