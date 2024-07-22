// Callback function in js

function sayHello(){
    console.log("Hello..")
}

function add(a,b, callback){
    var  b = a + b;
    callback();
    return b
}

console.log(add(2,4,sayHello));

add(2,4, () => console.log("Bye.."));

