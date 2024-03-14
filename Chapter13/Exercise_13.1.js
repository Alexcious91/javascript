function greet(fullname) {
    console.log(`Hello ${fullname[0]} ${fullname[1]}`);
}

function callUser(userName, callback) {
    let user = userName.split(" ");
    callback(user);
}

callUser("Alex Doe", greet);

