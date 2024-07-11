// selecting element by class
// example

var elem = document.getElementsByClassName("cl pi");


// changing the name of the element
for(let i = 0; i < elem.length; i++){
    elem[i].innerHTML = "<p>Hello</p>"
}

// selecting an element can also be done by selecting multiple elements