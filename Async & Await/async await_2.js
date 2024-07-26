const cheese = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "cheese"
            // console.log("The cheese is given");
            resolve(cheese);
            reject("Bad Cheese")
        },2000)
    })
}

const dough = (cheese) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + " & " +  "dough"
            // console.log("Here is the dough");
            resolve(dough);
            reject("Bad Dough")
        },2000)
    })
}

const makePizza = (dough) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const makePizza = dough + " = " + "Pizza"
            // console.log("The pizza is ready");
            resolve(makePizza);
            reject("Pizza Not Ready")
        },2000)
    })
}

// using async await function
async function orderPizza() {
    try {
        const makecheese = await cheese();
        console.log("Here is the cheese");

        const makedough = await dough(makecheese); 
        console.log("Here is the dough");

        const pizza = await makePizza(makedough); 
        console.log("The pizza is ready");
    } catch (error) {
        console.log(error);
    }
    console.log("Process Ended");
}

orderPizza();


// using .then method to return the promises
// cheese()
//     .then((cheese) => {
//         console.log("Here is the cheese");
//         return dough(cheese);
//     }).then((dough) => {
//         console.log("Here is the dough");
//         return makePizza(dough);
//     }).then((makePizza) => {
//         console.log(makePizza);
//     }).catch((error) => {
//         console.log(error);
//     })