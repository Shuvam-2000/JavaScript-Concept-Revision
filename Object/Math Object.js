// math object in js
// example

// get the py value with math object
console.log(Math.PI);

// round up
const x = Math.round(4.7);

console.log(x);

// generate random number
function getRandomNumber(min,max){
    var x = Math.floor(Math.random() * (max - min - 1)) + min;

    return x;
}

console.log(getRandomNumber(12,20));