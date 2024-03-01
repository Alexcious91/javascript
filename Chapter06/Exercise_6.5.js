let globalValue = "1000";

// (function () {
//     let globalValue = "100"; // local scope 
//     console.log(globalValue);
// })();

// let result = (function () {
//     let val = "Tiisetso";
//     return val;
// })();

// console.log(result);
console.log(globalValue);

(function (value) {
    console.log(`My name is ${value}`);
})("Alex");
