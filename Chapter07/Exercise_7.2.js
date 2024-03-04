class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let firstPerson = new Person("Alex", "Chelsea");
let secondPerson = new Person("Mandy", "Johnson");


console.log(firstPerson.fullName());
console.log(secondPerson.fullName());





