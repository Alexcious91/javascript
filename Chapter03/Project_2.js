const inventory = [];

let itemOne = {
    name: "Laptop",
    model: "HP",
    cost: 500,
    quantity: 5
}


let itemTwo = {
    name: "Samsung Phone",
    model: "Android",
    cost: 20,
    quantity: 10
}

let itemThree = {
    name: "iPhone 7s",
    model: "Apple",
    cost: 50,
    quantity: 15
}

inventory.push(itemOne, itemTwo, itemThree);

console.log(inventory);

console.log(inventory[2]["quantity"]);