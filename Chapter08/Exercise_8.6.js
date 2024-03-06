console.log(Math.PI.toFixed(3));

console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.random(5.7));

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(1 + Math.random() * 11));
console.log(Math.floor(1 + Math.random() * 101));


function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 100; i++) {
    console.log(generateRandom(1, 100));
}