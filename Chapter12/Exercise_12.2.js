const input = document.querySelector("input");
const output = document.querySelector(".output");
const btn = document.querySelector("button");

output.textContent = '';
btn.addEventListener("click", function() {
    const inputValue = input.value;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    const emailValid = emailRegex.test(inputValue);

    let response = '';

    if (emailValid) {
        response = "Valid Email";
        output.style.backgroundColor = "green"
    } else {
        response = "Invalid Email";
        output.style.backgroundColor = "red"
    }

    output.textContent = response;
});


