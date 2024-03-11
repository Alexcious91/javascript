let myTable = [];

let num = 4;

for (rows = 0; rows < num; rows++) { // iterate through the rows
    let tempArray = [];

    for (let cols = 0; cols < num; cols++) { // iterate through the cols
        tempArray.push(rows * cols);
    }
    myTable.push(tempArray)
}

console.log(myTable);
console.table(myTable);
