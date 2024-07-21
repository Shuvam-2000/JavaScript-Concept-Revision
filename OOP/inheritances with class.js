// OOP in js
// inheritance in class & objects for ES6

class employee{
    constructor(name, age, project){
        this.name = name;
        this.age = age;
        this.project = project;
    }
    msg(){
        return("Hey!!");
    }
}

class manager extends employee{
    constructor(name, age, project, department){
    super(name, age, project);
        this.department = department;
    }
    info(){
        return super.msg() + " :-\n " + this.name + " of " + this.department + " is assigned the project " + this.project
    }
}

// making objects for manager class
const mng1 = new manager("Shuvam Saha" , 23 , "UI Development", "Frontend Developer Team");
const mng2 = new manager("Riju Saha" , 23 , "API Development", "Backend Developer Team");

console.log(mng1.info());
console.log(mng2.info());

