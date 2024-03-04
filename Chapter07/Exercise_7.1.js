class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstPerson = new Person("Alex", "Chelsea");
let secondPerson = new Person("Mandy", "Johnson");

console.log(`Hello ${firstPerson.firstName} ${firstPerson.lastName}`);
console.log(`Hello ${secondPerson.firstName} ${secondPerson.lastName}`);
