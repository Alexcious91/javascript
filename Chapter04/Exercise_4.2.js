let age = parseInt(prompt("How old are you?"));

let message;

if (age >= 21) {
    message = "You're allowed";
} else if (age >= 19) {
    message = "You're not allowed";
} else {
    message = "You're still under age";
}

console.log(message);