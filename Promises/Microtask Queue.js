// MicroTask Queue In JS

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved")      // in microstack queue to be executed first
});

setTimeout(() => {                   // in callstack queue to be executed after promise
    console.log("Hi..")
})

p.then((data) => {              
    console.log(data)
}).catch((err) => {            
    console.log(err)
})

console.log(p);
