// object destructruing

const book = {
    name: "Advance Js",
    price: 200,
    pages: 300 
};

// destructuring the object by assiging the propeties to a var
const {name, price, pages} = book;

// taking the value of the object with new variable
const {name: title, price: amount, pages: number} = book;

console.log(title, amount, number);

// destructruing of a nested object
const book2 = {
    name: "Advance Js",
    price: 200,
    pages: 300,
    
    publication: {
        publisher_name: "ABCPublisher",
        year: 2024
    }
}

// taking all the values of the neste object in a different variables
const {name: title2, price: amount2, pages: number2, publication: {
        publisher_name: publisherName, year: yearPublished}} = book2;

console.log(title2, amount2, number2, publisherName, yearPublished);


