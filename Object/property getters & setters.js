// getter & setter function in js
// example

// getter function - fetching the vakue of the firstName in uppercase
var person = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,

    get getname(){
        return this.firstName.toUpperCase();
    }
};

console.log(person.getname);

// setter function - change the firstName in obj and print it in uppercase
var person1 = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,

    set setname(name){
        this.firstName = name.toUpperCase();
    }
};

person1.setname = "riju";

console.log(person1.firstName);