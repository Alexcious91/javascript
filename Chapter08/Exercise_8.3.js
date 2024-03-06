let numbersArray = [2, 4, 6, 8, 10];

let mappedNumbers = numbersArray.map(function(number) {
    return number * 2;
});
console.log(mappedNumbers);

let uniqueNumbers = numbersArray.map(number => number * 2);
console.log(uniqueNumbers);
