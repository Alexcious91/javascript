const myTable = [];

let numberOfRows = 3;
let numberOfColumns = 6;

let counter = 0;

for (let i = 0; i < numberOfRows; i++) {
    let tempTable = [];
    
    for (let j = 0; i < numberOfColumns; j++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable)
}

console.table(myTable);
