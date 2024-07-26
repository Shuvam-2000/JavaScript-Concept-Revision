// Async & Await in JS

// throw new error in async
// async function makeRequests(){
//     throw new Error ("error in program")
// };

// makeRequests()

// promise to check if the passenger boarded the flight
const flightTicket = new Promise ((resolve, reject) => {
    const boarded = false;
    if(boarded == true){
        resolve("The passenger has boarded the flight")
    }else{
        reject("The passenger did not board the flight")
    }
});

flightTicket.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Flight took off")
})
