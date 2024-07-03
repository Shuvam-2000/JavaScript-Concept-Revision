// Arguument Objects in js
// example

function add(){

    if(arguments.length == 0){
        console.log("No arguments passed");
    }else{
        let sum = 0;
        for(i = 0; i< arguments.length;i++){
            sum += arguments[i];   // access individual argument and add to the sum 
        };
        console.log(sum);
    };

};


add(5,2,10);

// the function can also be stored in a variable 
// both variable and function can be called print the output
var addition = add;

addition(5,2,7);