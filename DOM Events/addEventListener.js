// addeventlistener in js
// example

const buttonClick = document.getElementById("btn-dom")

buttonClick.addEventListener('click', function(){
    console.log("Button was Clicked")
});

// mouseover event
buttonClick.addEventListener('mouseover', function(){
    console.log("mouseover")
});

// mouse out event
buttonClick.addEventListener('mouseout', function(){
    console.log("mouseout")
});



