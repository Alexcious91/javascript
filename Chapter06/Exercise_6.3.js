"use strict";
function calculator(paramOne, paramTwo, stringValue) {
    if (stringValue === "add") {
        return paramOne + paramTwo;
    } else if (stringValue === "subtract") {
        return paramOne - paramTwo;
    }
}

console.log(calculator(10, 5, "subtract"))