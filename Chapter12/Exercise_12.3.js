function findLast() {
    let lastOne = '';

    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}

console.log(findLast("fun", "any", "javascript", "as", "any"))