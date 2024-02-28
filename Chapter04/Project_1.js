let value = parseInt(prompt("Guess the number:"));

let num = 100;
let message = "Nothing";

if (value > num) {
    message = value + "  was greater than " + num;
} else if (value === num) {
    message = value + "  was equal to " + num;
} else {
    message = value + " is less than " + num;
}

console.log(message);