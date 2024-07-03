// multidimensional array in js
// example

const book = ["Math", "Physics", "Bio", "Computer","Science"];

const bookWithPages = [
        ["Math", "300"], 
        ["Physics", "200"],
        ["Bio", "400"], 
        ["Computer", "400"]
];

const fetch = bookWithPages[2][0];

console.log(fetch);