const inputItem = document.querySelector("input");
const btnAdd = document.querySelector("#addItem");
const btnDelete = document.querySelector("#deleteItem");
const errorMessage = document.querySelector("#errorMessage");
const displayContainer = document.querySelector("#displayContainer");

btnAdd.addEventListener("click", addItem);

let items = [];

function addItem() {
    const newItem = inputItem.value.trim();

    if (newItem === "") {
        errorMessage.textContent = "Please enter a valid item";
        return;
    }

    if (items.includes(newItem)) {
        errorMessage.textContent = "Item already in the list";
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<li class="d-flex border justify-content-between align-items-center p-2 my-2">
            <div class="d-flex">
            <input type="checkbox" class="mx-2 cursor-pointer">
            <span class="fs-13">${newItem}</span>
            </div>
            <i class="trash-icon bi bi-trash mx-2 fs-16 cursor-pointer" id="deleteItem"></i>
        </li>`
    ;
    displayContainer.appendChild(li);

    items.push(newItem);
    errorMessage.textContent = "Item added succesfully.";
    inputItem.value = "";
}
