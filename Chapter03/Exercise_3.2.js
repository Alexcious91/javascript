
const shoppingList = [];

shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList.pop()); // Remove last elemtn

shoppingList.sort();
console.log("Index of milk: " + shoppingList.indexOf("Milk"));

console.log(shoppingList);
shoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList);

const newShoppingList = ["Juice", "Pop"];

// #9
const combinedList = shoppingList.concat(newShoppingList);
console.log(combinedList);

console.log(combinedList.lastIndexOf("Pop"));
console.log(shoppingList);

