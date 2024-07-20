// setTimeOut

const timeoutId =setTimeout(setTime, 5000);

function setTime(){
    alert("Bhag Bhosdike");
}

// to stop the timeinterval completely
clearTimeout(timeoutId);

// setInterval
var interval = setInterval(func, 2000);

function func(){
    console.log("Tru tru tu tru tru tu tara tara");
}

const closeButton = document.getElementById("btn-interval");

closeButton.addEventListener('click', function(){
    clearInterval(interval)
})