const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

theList.shift(); // Removes first
theList.pop(); // Removes last

theList.unshift("FIRST"); // Add at first index

console.log(theList);

theList.splice(3, 3, "hello World");

theList[2] = "MIDDLE";

theList[theList.length - 1] = "LAST";

console.log(theList);
