const randomNumber = Math.floor(1 + Math.random() * 3);

let answer = "something went wrong";

let question = prompt("Your niece's age");

switch (randomNumber) {
    case 1:
        answer = "Buy baby milk";
        break;
    case 2:
        answer = "Buy baby bed";
        break;
    case 3:
        answer = "Buy ball";
        break;
    default:
        answer = "Buy nothint";
        break;
}

console.log(`Question: ${question}? Answer: ${answer}`);