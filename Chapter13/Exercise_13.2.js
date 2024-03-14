const counterPromise = new Promise((resolve, reject) => {
    resolve("Start counting");
});

counterPromise
    .then((result) => console.log(result))
    .then((value) => console.log("One"))
    .then((value) => console.log("Two"))
    .then((value) => console.log("Three"))
    .catch(err => console.log(err));



