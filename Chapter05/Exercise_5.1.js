const max = 5;
const randomNumber = Math.floor(1 + Math.random() * max)

let correct = false;

while (!correct) {
    userInput = parseInt(prompt("Enter a number between 0 and 5:"));

    if (userInput === randomNumber) {
        alert("Wow, You got our secret number.")
        correct = true;
        break;
    } else if (userInput > randomNumber) {
        alert("Your number is too high");
    } else if (userInput === null) {
        break;
    } else {
        alert("Your number is too low");
    }
}

