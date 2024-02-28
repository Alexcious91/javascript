const person = prompt("Enter your name");

let message;

switch (person) {
    case "Maddy" :
    case "Alexc" :
    message = person + " is my friend";
    break;
    default :
    message = `I don't know ${person}`;
}

console.log(message);
