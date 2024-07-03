// foreach function in js
// example

const book = ["Math", "Physics", "Bio", "Computer","Science"];

// let lengthOfArray = book.length;


// for(i = 0; i < lengthOfArray; i ++){
//     console.log(`Element ${i} is ${book[i]}`);
// }


// foreach function takes one parameter at least 
// it executes once for each element in array 
// the foreach fucntion requires a function as its argument
book.forEach(len);

// the values of the book array is assigned to arr 
// after foreach iterates over it 
// each value is only ascessible when it is called to the function len
// then it prints in the console
function len(arr){
    console.log(arr);
}
