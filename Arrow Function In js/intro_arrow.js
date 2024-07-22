// Arrow Function In Js

function sum(a,b){
    return a+b;
}

console.log(sum(5,6));


// arrow function
const sumA = (a,b) => {
    return a+b
}

console.log(sumA(2,3));

// arrow function two
const sumB = (a) => {
    return a = 2*a
}

console.log(sumB(2))

// arrrow function three
const sumC = (a,b) => a+b;

console.log(sumC(2,4));

// arrow function four
const double = (a) => {
    return a*2
}

console.log(double(2));

// generate random number with arrow function
const random = () => Math.random();
  
console.log(random())

// addeventlistener with arrorw function
const btn = document.getElementById("btn");

btn.addEventListener('mouseover', () => {
    console.log("clicked")
})