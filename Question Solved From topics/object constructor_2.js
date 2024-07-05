// create a constructor function Person that takes two parameters firstName & lastName
// add a method to fullname to the constructor and rreturn the full name

// answer

// creating the object constructor
function Person(firstname, lastname){
    this.firstName = firstname;
    this.lastName = lastname;
};

// passing the parameters of the obj construc to a new created object
var person = new Person("John", "Doe");

console.log(person);

// adding method fullname to the object constructor
person.fullName = function(){
    return this.firstName + " " + this.lastName;
};

console.log(person.fullName());

// solve a question from geter & setter , functions, anonymous funtions , setTimeout , loops