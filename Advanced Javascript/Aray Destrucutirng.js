// Array Destructuring

const book = ["Advance Js", , 200, 150];

// const name = book[0];
// const pages = book[1];
// const cost = book[2];

// destructuring the array and assigining the array to the book array
// page is given a default value as the page is assigned to a empty index
const [name, page=500, price] = book;

console.log(page);

// destructuring a nested array
const book1 = ["Dongri to Dubai", 150, 400, ["Shuvam Saha", 2000]];

// assiging variable to the nested array
const [name1, page1, price1, [publication,year]] = book1

console.log(name1, page1, price1, [publication,year]);

// destructuing of array in a function
function destructureArray(){
    return["Advance Js", 120, 400, ["Shuvam Saha", 2000]]
}

const [book_title, page_no, price_book, [publication2,year2]] = destructureArray();

console.log(book_title, page_no, price_book, [publication2,year2]);