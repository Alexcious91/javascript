class Person {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(name) {
        this.#firstName = name;
    }

    greet() {
        console.log(`First Name: ${this.#firstName} ${this.#lastName}`);
    }
}

let firstPerson = new Person("Tiisetso", "Radiopane");

console.log(firstPerson.greet());
console.log(firstPerson.firstName = "Mango");

firstPerson.greet();
