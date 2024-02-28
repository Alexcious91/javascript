
const myCar = {
    make: "Mercedes Benz",
    model: "Vito",
    tires: 4,
    color: "black"
};

let carColor = "White";

myCar["color"] = carColor;
console.log(myCar);

myCar["forSale"] = true;
console.log(myCar);

console.log(myCar.make);
console.log(myCar.model);