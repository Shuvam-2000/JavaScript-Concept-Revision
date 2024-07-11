// query selector in js - can be used in tag, class, id 
// example

var elem = document.querySelectorAll("p.query-select");

// elem.innerHTML = "Hello";

// console.log(elem);

// changine all the elements with class query-select 
for(x = 0; x < elem.length; x++){
    elem[x].innerHTML = "Hello buddy"
};


// Note:- when the innerhtml becomes array it should be changed with a loop
