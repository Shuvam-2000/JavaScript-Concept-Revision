// methods in object
// example

// 1st way to create a method for an object
let person = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,
};

person.sayHello = function(){
    console.log("Hello");
};

person.sayHello();

// 2nd way to create a method for an object
function greet(){
    console.log("Hi");
};

// assigning the function to the method for the object
person.sayHi = greet;

person.sayHi();


// 3rd way to create a method for an object
var element = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,
    saybye: function(){
        console.log("Goodbye");
    }
};

element.saybye();

// 4th way to create a method for an object
let obj = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,
    sayGood(){
        alert("Hello")
        console.log("Howdy");
    }
};

