// OOP in js 
// prototype

function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age
}


Person.prototype.fullName = function(){
    return(this.firstname + " " + this.lastName)
}

const person = new Person("Shuvam", "Saha", 23);
const person2 = new Person("Riju", "Saha", 23);


console.log(person);
console.log(person2);
