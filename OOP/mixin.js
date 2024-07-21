// OOP in js
// Mixin 

const mixinMethod = {
    sayHi() {
        console.log("Hi");
    },

    sayBye() {
        console.log("Bye");
    }
};

class user {
    constructor(n) {
        this.name = n;
    }
}

class admin extends user {

}

// Assigning the object method to the class user
Object.assign(admin.prototype, mixinMethod);

const admin1 = new admin("Shuvam Saha");

console.log(admin1.sayHi()); 

