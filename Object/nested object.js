// nested object in js
// example

// creating a nested object
var user = {
    id: 100,
    email: "shuvamsaha2000@gmail.com",
    personalInfo: {
        name: "Shuvam Saha",
        address : {
            street: "3/12 Street",
            city: "Durgapur",
            country: "India"
        }
    }
};

// accesing the whole nested object
console.log(user);

// accesing multiple properties from the nested object
console.log(user.personalInfo.address.country);