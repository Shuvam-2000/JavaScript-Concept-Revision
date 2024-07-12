// create and append elemnt in js
// example

var elem = document.getElementById("append");

// creating a new tag
var createNewTag = document.createElement('h1');

// adding class to the new created tag
createNewTag.className = "heading";

// append the new created tag to the elem variable
elem.appendChild(createNewTag);

// add element to the new created tag
// var addText = document.createTextNode("This is a h1 Tag");

// append the addText to the new created tag 
// createNewTag.appendChild(addText);

// appending text in a tag with properties
createNewTag.textContent = "Content Added";


// appending the new tag to the body 
var addToBody = document.body.appendChild(createNewTag);h

addToBody.id = "head-append";


// reading the text in the p tag
var readText = document.getElementById("para");
console.log(para.textContent);
