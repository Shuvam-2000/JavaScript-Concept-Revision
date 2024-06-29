// switch statemnt 
// example

// if input = 1, "y", "yes" output = continue...
// if input = 0, "n", "No" output = End...

let input;

input = "y";

// if(input === 1){
//     document.write("continue")
// }else if(input === "y"){
//     document.write("continue")
// }else if(input === "yes"){
//     document.write("continue")
// }else if(input === 0){
//     document.write("end")
// }else if(input === "n"){
//     document.write("end")
// }else if(input === "No"){
//     document.write("end")
// }else{
//     document.write("Wrong Input")
// }


// using switch statement - does strict comparison (===)
switch(input){
    case 1:   //  same as if (input ===1)
        document.open(input);
        document.write("continue");
        break;
    case "y": //else if(input === "y")
        document.open(input);
        document.write("continue");
        break;
    case "yes": //else if(input === "yes") 
        document.open(input);
        document.write("continue");
        break;
    case 0:  
        document.open(input);
        document.write("End");
        break;
    case "n": 
        document.open(input);
        document.write("End");
        break;
    case "yes":  
        document.open(input);
        document.write("End");
        break;
    default :
        document,open(input);
        document.write("Wrong Input");
}
