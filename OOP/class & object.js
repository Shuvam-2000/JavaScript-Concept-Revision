// OOP in js
// class & object

// making a class
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        return("Hi")
    }

    // static method
    static hello(){
        return "hello";
    }

    // static property
    static sproperty = "static property"
}

// making object from the class person
const person1 = new person("Shuvam", 23);

// callling static method by class
console.log(person.hello());

console.log(person1);

console.log(person1.sayHi());

// fetching the static property with class
console.log(person.sproperty);