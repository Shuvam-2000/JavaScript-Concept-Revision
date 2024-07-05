// object constructor function in js 
// example

// obj constructor helps in creating propeties in a already created function

// name of the function to be made in uppercase in obj construc func
function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.cls = cls;
}

// passing the parmameters of the obj construc func to student1 object
var student1 = new Student("Shuvam", "Saha", 23, 4);

console.log(student1);

// adding new property to the object 
student1.Nationality = "Indian";

console.log(student1);

// adding a method to the student1 obj
student1.name = function(){
    return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase()
}

console.log(student1);

console.log(student1.name());