let string = "thIs will be capiTalized for each word";

function capitalize(str) {
    str.toLowerCase();
    let modified = [];

    let strArray = str.split(" ");
    strArray.forEach(word => {
        let temporaryWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        modified.push(temporaryWord); 
    });
    
    return modified.join(" ");
}

console.log(capitalize(string));


