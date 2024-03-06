let arrayNames = ["Peter", "Andy", "Mandy", "Peter", "Andy", "Peter"];

let newArray = arrayNames.filter((value, index, array) => {
    console.log(`Index: ${index} || Value: ${value}`);
    return array.indexOf(value) === index;
});

console.log(newArray)