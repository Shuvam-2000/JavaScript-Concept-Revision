// parmater & arguments in function
// exapmle

// simple program to understand

function add(num1, num2){
    document.write(num1 + num2);
};

add(4,6);

// num1 & num2 are parameters & 5 and 7 are arguments

// another example

document.write("<br><br>");

function multiply(val){
    for(i = 0; i <=10; i++){
        document.write(`${val} x ${i} = ${val*i}`)
        document.write("<br>");
    };
};

multiply(2);