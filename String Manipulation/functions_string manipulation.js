// function for string manipulation
// example

// concat function - used for joining two strings
const str1 = "Shuvam";

const str2 = "Saha"

const str3 = " ";

const concat = str1.concat(str3, str2);

console.log(concat);


// substr() function - used for extraction of substring
const str = "Javascript is a language used in web development";

const subStrExtract = str.substr(2,20);

console.log(subStrExtract);

// substring() function - used for fetching characters from given position
const substr = "Javascript is a language used in web development";

const substring = substr.substring(2,6);

console.log(substring);

// indexof() function - used for locating the postion of any word 
const indexStr = "Javascript is a language used in web development";

const indexOf = indexStr.indexOf('used');

console.log(indexOf);

// Lastindexof() function - used for locating a word from the last of the string
const lastIndexStr = "Javascript is a language used in web development";

const lastIndexPosition = lastIndexStr.lastIndexOf('in');

console.log(lastIndexPosition);

// replace function - relaces a particular word with another in the string
const replaceStr =  "Javascript is a language used in web development";

const replacefunc = replaceStr.replace('language', 'programming language');

console.log(replacefunc);


