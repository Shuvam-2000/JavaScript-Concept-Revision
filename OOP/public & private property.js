// OOP in js
// public & private property

class employee {
    #name = "";

    constructor(n) {
        this.#name = n;
    }

    #getname() {
        return this.#name;
    }

    pubfunc() {
        return this.#getname(); // Access private method within public method
    }
}

const employee1 = new employee("Shuvam Saha");

console.log(employee1.pubfunc()); 

