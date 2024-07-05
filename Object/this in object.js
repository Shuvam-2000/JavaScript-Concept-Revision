// this in object
// example

var person = {
    firstName: "Shuvam",
    lastName: "Saha",
    age: 23,
    sayGood(){
        console.log("Howdy ! I am "+ this.firstName + " and I have a " 
            + car.brand + " " + car.model + " car");
    }
}


var car = {
    brand: "Tata",
    model: "Safari"
};

person.sayGood();
