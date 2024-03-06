let string = "I Love Javascript";

let vowelArray = ['a', 'e', 'i', 'o', 'u'];

function replacer(array, string) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Index: ${i} - ${array[i]}`);
        string = string.replaceAll(array[i], i)
    }

    console.log(`Result: ${string}`)
}

replacer(vowelArray, string);