var div = document.getElementById("myDiv");
var button = document.getElementById("btn");

button.addEventListener('click', btnclicked);
div.addEventListener('click', divclicked);

document.body.addEventListener('click', bodyClicked);

function btnclicked(event){
    console.log("button clicked....");
    event.stopPropagation();
}

function divclicked(){
    console.log("div clicked....");
}

function bodyClicked(){
    console.log("body clicked....");
}