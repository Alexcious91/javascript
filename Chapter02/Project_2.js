
let inches = 10;
let pounds = 20;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres

console.log(weight, height);

let bmi = weight / (height/100 * height/100);

console.log(bmi);
