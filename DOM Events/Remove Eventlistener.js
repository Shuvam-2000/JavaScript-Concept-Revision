// removeeventlistener in js
// example

var btn = document.getElementById("btn-dom")

function click1(){
    console.log("Clicked 1 Activated")
}

function click2(){
    console.log("Clicked 2 Activated")
}

btn.addEventListener('click', click1);
btn.addEventListener('click', click2);

// removing eventlisteners
btn.removeEventListener('click', click2);