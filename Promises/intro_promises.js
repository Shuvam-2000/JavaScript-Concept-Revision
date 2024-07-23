// Promises In Js

// const p = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove({name: "Shuvam Saha"})
//     },4000)
// });

// console.log(p);


// use of promise as a button
const resloveBtn = document.getElementById("btn")
const rejectBtn = document.getElementById("btn2")

const p = new Promise((resolve, reject) => {
    resloveBtn.addEventListener('click', () => {     //  promise resloved
        resolve("Promise Resolved")
    })

    rejectBtn.addEventListener('click', () => {       // promise rejected 
        reject("Promise Rejected")
    })
});

p.then((data) => {              // works when promise resloved
    console.log(data)
}).catch((err) => {            // works when promise is rejected
    console.log(err)
}).finally(() => {
    console.log('Finally Done')
})


console.log(p);


// data represents the message when the promise is resloved
// errr represents the message when the promise is rejected
// Finally Done reperesents when the promise is settled means it is either
// rejected or resloved