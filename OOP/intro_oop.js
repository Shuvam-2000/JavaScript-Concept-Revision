// object oriented programming

// oop before es6
function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.changeAge = function(newAge){
        this.age = newAge;
    }
}

const person = new Person("Shuvam", "Saha", 30);

person.changeAge(23)

person.info = function(){
    return this.firstName + " " + this.lastName + " " + this.age
};

console.log(person.info());

