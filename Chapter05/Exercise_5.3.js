let myWork = [];

for (let i = 1; i < 10; i++) {
    let status = i % 2 === 0 ? true : false // using ternary operator  
    
    myWork.push({
        name: `Lesson ${i}`,
        status: status
    });
}

console.log(myWork);