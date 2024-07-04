// objects in javascript
// example

let person = {
    firstName: "Shuvam",
    lastName: "Saha",
    height: "5,10"
};

// accesing all the properties from the object
console.log(person);

// accesing inidvidual properties from the object
console.log(person.firstName);

// accesing properties in array
console.log(person['firstName']);

// modifiying or changing a object property
person.firstName = 'Riju';

console.log(person.firstName);

console.log(person);

// adding another property
person.age = 23;

console.log(person.age);

console.log(person);

// to finding a property from object
console.log('height' in person);

console.log(person);

// deleting a property from object
delete person.height;

console.log(person);

// get access of all the properties of an object
for (var key in person){
    console.log(key + " : " + person[key]);
}