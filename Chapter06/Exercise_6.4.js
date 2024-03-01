let myArray = [];

for (let i = 0; i < 10; i++) {
    let valueOne = 5 * i;
    let valueTwo = i * i;

    let results = calculator(valueOne, valueTwo, "+");
    myArray.push(results);
}
console.log(myArray);

function calculator(val1, val2, operator) {
    if (operator == "+") {
        return val1 + val2;
    } else {
        return val1 - val2;
    }
}

