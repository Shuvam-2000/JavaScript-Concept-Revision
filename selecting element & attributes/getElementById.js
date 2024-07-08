// getElementById - selecting elements from html 
// example

var elem = document.getElementById("select-element");
var elem2 = document.getElementById("show-element")

console.log(elem)

function change(){
    elem.style.innerHTML = "none"
    elem2.style.display = "block"
}

function show() {
    elem.style.display = "block";
    elem2.style.display = "none";
}


// to retrive or extract the inner value of the html
console.log(elem.innerHTML)