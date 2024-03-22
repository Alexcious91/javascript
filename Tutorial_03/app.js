const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the form submitting itself

    // create new object using FormData object
    const data = new FormData(form); 
    
    // convert form data into javascript object
    const obj = Object.fromEntries(data);

    // convert javascript object to JSON
    const json = JSON.stringify(obj);

    
    localStorage.setItem("formData", json);

    window.location.href = "confirm.html"
})