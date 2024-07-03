// Introduction to Arrays in javascript
// example


// creating a array
const programmingBook = ["Javascript", "Python", "Java", "C++", "Flutter"];

// replace index [0] which is Javascript with Go
programmingBook[0] = "Go";

// get the length of the array
console.log(programmingBook.length);

// push a item in the array
programmingBook.push('C#');

// unshift function() - to add element in first index
programmingBook.unshift("Rust");

// pop function() - to remove any element from last
programmingBook.pop();

// shift function() - to remove any element from first
programmingBook.shift();

// splice function() - to remove a specific element in the array
programmingBook.splice(1, 2);

// to totally delete the array
// programmingBook.length = 0;

// indexof() function - to know rhe position of any specific element 
const position = programmingBook.indexOf("Java");

console.log(programmingBook);

// Array.isArray() - to know if the element is an array or not 
const position1 = programmingBook;

console.log(Array.isArray(position1));

// split() function - to split an array into different element 
const text = "This is a random text";

console.log(text.split(' '));

// concat function - to add new element in an array
const newArr = ["Book", "Pen", "Diary", "Rubber"];

console.log(newArr.concat("Pencil"));

