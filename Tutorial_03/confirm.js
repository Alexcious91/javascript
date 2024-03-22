(function getData() {
    const json = localStorage.getItem("formData"); // retrieve formData from local storage
    const obj = JSON.parse(json); // convert JSON into javascript object

    // iterate through each item
    for (let item in obj) {
        const dataItem = `
            <div>
                <span>${item}: ${obj[item]}</span>
            </div>
        `;

        document.getElementById("data").innerHTML += dataItem;
    }
})();