// string manipulation 
// example

const str = "Shuvam";

// template literal
const name = `Hi ${str}`;

console.log(name);

// escape characters

// new line
const nam = "Shuvam \n Saha";

console.log(nam);

// give space between two sentence
const shuv = "Shuvam \t Saha";

console.log(shuv);

// print (\) between two words 
const riju = "Shuvam \\ Saha";

console.log(riju);

// print with a (") between two words
const shuva = "Shuvam \" Saha";

console.log(shuva);

// fetching a character according to the position or index
const fetch = "Shuvam Saha";

console.log(fetch[4]);

// concatenate - joining two strings
const concat1 = "Shuvam";
const concat2 = "Saha";

console.log(concat1 + " " + concat2);

// comapring two string
const compare = "Shuvam Saha"

if("SHUVAM SAHA" == compare){
    console.log("The variable is not equal")
}else{
    console.log("The vairables are equal")
}