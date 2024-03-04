class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.type} is making sound: ${this.sound}`);
    }
}

Animal.prototype.doAction = function() {
    console.log(`${this.type} is doing something`);
}

let lion = new Animal("Lion", "roar");
let cat = new Animal("Cat", "meow");


// lion.makeSound();
// cat.makeSound();

lion.doAction();
cat.doAction();

