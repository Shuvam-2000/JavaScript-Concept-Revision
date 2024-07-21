// OOP in js
// inheritance

function Creature(lifespan){
    this.lifespan = lifespan;
}

// adding method to the reatture function
Creature.prototype.breadth = function(){
    return("breathing");
}

// object for Creature prototype
const creature1 = new Creature(100);


function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}


// adding method to the Person prototype
Person.prototype.fullName = function(){
    return(this.firstName + " " + this.lastName)
}

// connecting person prototype to creature prototype
Person.prototype.__proto__ = Object.create(Creature.prototype)

// object for Person prototype
const person1 = new Person("Shuvam", "Saha", 23);
const person2 = new Person("Riju", "Saha", 23);



console.log(person1.fullName());
console.log(person1.breadth());
