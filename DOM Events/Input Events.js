var x = document.getElementById("myInput");

x.addEventListener('focus', function(){
    x.style.background = "yellow"
});

x.addEventListener('blur', function(){
    x.style.background = "red";
});

x.addEventListener('change', function(){
    console.log(this.value)
});

x.addEventListener('input', function(){
    console.log(this.value)
});