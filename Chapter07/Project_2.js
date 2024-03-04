class Products {
    #firstProduct = 5;
    #secondProduct = 10;

    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }

    calculate() {
        return (this.item1 * this.#firstProduct) + (this.item2 * this.#secondProduct)
    }

    get getTotal() {
        return this.calculate();
    }
}

let a = new Products(2, 10);
let b = new Products(10, 50);
let c = new Products(5, 100);


console.log(a.getTotal);
console.log(b.getTotal);
console.log(c.getTotal);



