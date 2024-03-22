const inputItem = document.querySelector("input"); // get input
const btnAdd = document.querySelector("#addItem"); // button to add items
const btnRemove = document.getElementById("deleteItem"); // button to delete items
const btnRetrieve = document.querySelector("#getItem"); // button to retrieve items
const errorMessage = document.querySelector("#errorMessage");
const displayContainer = document.querySelector("#displayContainer");

// Event listeners
document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "addItem") {
        addItem();
    }

    if (event.target && event.target.id === "getItem") {
        getItem();
    }

    if (event.target && event.target.id === "deleteItem") {
        removeItem();
    }
});

let items = [];

// Add items to local storage
function addItem() {
	const newItem = inputItem.value.trim(); // Remove whitespace

	if (newItem === "") {
		errorMessage.textContent = "Please enter a valid item";
		return;
	}

	if (items.includes(newItem)) {
		errorMessage.textContent = "Item already in the list";
		return;
	}

    let li = createListItem(newItem)
	displayContainer.appendChild(li);
	items.push(newItem); // Push items into global array
	inputItem.value = ""; // Clear input after adding

    showSuccess("Item added succesfully.");

    // Store items in local storage
	(function storeData() {
		localStorage.setItem("ShoppingList", `${JSON.stringify(items)}`);
	})();
}

// Retrive items from local storage
function getItem() {
    // displayContainer.innerHTML = ""; // Clear existing data before retriveing
	const storedItems = localStorage.getItem("ShoppingList");
	const storedItemsArray = JSON.parse(storedItems); // parse from strings to an object

    if (storedItemsArray) {
        let alreadyRetrievedItems = true;
        // Iterate through each items in local storage
        storedItemsArray.forEach(item => {
            if (!items.includes(item)) { // If they're not in an array = create them
                alreadyRetrievedItems = false;
                const li = createListItem(item);
                displayContainer.appendChild(li);
                items.push(item);
            }
        });

        if (alreadyRetrievedItems) {
            showSuccess("Items already retrieved.");
            // errorMessage.style.color = "#000";
        } else {
            showSuccess("Items retrieved succesfully.");
        }
    }

    // Check if there are items to retrieve
    if (!storedItemsArray) {
        showError("There are no items to retrieve");
    }
}

// delete items in the localStorage
function removeItem() {
    const storedItems = localStorage.getItem("ShoppingList");
	const storedItemsArray = JSON.parse(storedItems); // parse from strings to an object

    // Prototype
    console.log("Item deleted from database.")
    // Check if there items to delete first
    if (storedItemsArray) {
        localStorage.removeItem("ShoppingList");
        errorMessage.textContent = "Items deleted succesfully."
    } else {
        showError("There are no items to delete.")
    }
}

// Function to create <li> tag
function createListItem(item) {
    const li = document.createElement("li");
    li.classList.add("d-flex", "border", "justify-content-between", "align-items-center", "p-2", "my-2");
    li.innerHTML = 
        `<div class="d-flex">
            <input type="checkbox" class="mx-2 cursor-pointer">
            <span class="fs-13">${item}</span>
        </div>
    `;

    return li; 
}

// function for success operation
function showSuccess(message) {
    errorMessage.textContent = message;
}

// function for success operation
function showError(message) {
    errorMessage.textContent = message;
}
