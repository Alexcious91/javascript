let arrayNames = ["Admin", "User Admin", "Developer"];

function chooseRole() {
    let userName = prompt("What is your name?");
    let randomRole = arrayNames[Math.floor(Math.random() * arrayNames.length)];

    console.log(`Name: ${userName} || Role: ${randomRole}`);
}

chooseRole();

