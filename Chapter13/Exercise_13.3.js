let counter = 0;

const myPromise = (argument) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++
            resolve({ counterValue: counter, argumentValue: argument });
        }, 1000);
    })
}

async function executorFunction(index) {
    console.log(`ready ${index} counter: ${counter}`);
    const result = await myPromise(index);
    console.log(`x value ${index} counter: ${result.counterValue}`);
}

for (let i = 1; i < 4; i++) {
    executorFunction(i);
}