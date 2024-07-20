// innerheight & innerwidth
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// outerheight & outerwitdth
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// open google
const btn1 = document.getElementById("btn1");
const url = "https://www.google.com";
const features = "height=500,width=500";
var closewin;

btn1.addEventListener('click', function(){
    window.open(url,'google',features)
});

// open yahoo
const btn2 = document.getElementById("btn2");
const url2 = "https://www.yahoo.com";
const features2 = "height=500,width=500";
var closewin2;

btn2.addEventListener('click', function(){
    window.open(url2,'yahoo',features2)
});

// close
const closeButton = document.getElementById("btn3");


closeButton.addEventListener('click', function(){
    closewin.close();
    closewin2.close();
});