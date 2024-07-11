// selecting element by tagname in js
// example

var heading = document.getElementsByTagName("h2");

heading.innerHTML = "Hello Buddy";

console.log(heading.innerHTML);

// changing the h2 inside the div
var div1 = document.getElementById("div1");
var elem = div1.getElementsByTagName("h2");

for(x = 0; x < elem.length; x++){
    elem[x].innerHTML = "Hello buddy"
};