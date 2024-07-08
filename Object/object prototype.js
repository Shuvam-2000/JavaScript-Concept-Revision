// object prototypes in js
// example


function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.cls = cls
 };


var student1 = new Student("Shuvam", "Saha", 17, 12);
var student2 = new Student("Riju", "Saha", 17, 12);

// adding new property to both objects with prototypes
Student.prototype.nationality = "Indian";

// Adding the name method to the prototype
Student.prototype.name = function(){
    return this.firstName + " " + this.lastName + " is of age " + this.age + 
            " and in class " + this.cls + " with nationality " + this.nationality
};

console.log(student1.name());
console.log(student2.name());

