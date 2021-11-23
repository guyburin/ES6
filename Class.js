// - Class
class Person {
    // constructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // method
    getFullName() {
        return this.firstName + " " + this.lastName;
    }  

}

let a1 = new Person("A", "1");
let b2 = new Person("B", "2");

console.log(`Name: ${a1.firstName}`);
console.log(`Full name: ${a1.getFullName()}`);

console.log(`Name: ${b2.firstName}`, );
console.log(`Full name: ${b2.getFullName()}`);