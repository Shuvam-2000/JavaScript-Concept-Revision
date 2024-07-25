// Async & Await in JS

// throw new error in async
// async function makeRequests(){
//     throw new Error ("error in program")
// };

// makeRequests()


// async function makeRequests(){
//     const url = 'https://dummyjson.com/products'
//     const responsePromise = fetch(url)
//     responsePromise.then((res) => res.json())
//     .then((data) => { console.log(data)})
// }

// makeRequests()

// using await keyword for requests 
async function makeRequests(){
    const url = 'https://dummyjson.com/products'
    const responsePromise = await fetch(url)
    console.log(responsePromise)
    console.log("Hi...")
}

makeRequests()

