// Step 1: Select all page elements
const inputElement = document.querySelector(".main input");
const addButton = document.querySelector(".main button");
const outputList = document.querySelector(".output");

// Step 2: Create or retrieve tasks array from local storage
let tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

// Step 3: Build task items and add to the page
function buildTaskItem(task) {
	// Create a new list item element
	const listItem = document.createElement("li");

	// Create a text node with the task name
	const textNode = document.createTextNode(task.name);

	// Append the text node to the list item
	listItem.appendChild(textNode);

	// Append the list item to the output list
	outputList.appendChild(listItem);

	// If the task is marked as complete, add the 'ready' class
	if (task.checked) {
		listItem.classList.add("ready");
	}

	// Step 5: Add event listener to toggle 'ready' class and update local storage
	listItem.addEventListener("click", function () {
		// Toggle the 'ready' class
		listItem.classList.toggle("ready");

		// Update the checked status in the tasks array
		tasks.find((t) => t.name === task.name).checked =
			listItem.classList.contains("ready");

		// Save the updated tasks array to local storage
		saveTasks();
	});
}

// Step 6: Build tasks array from visual data
function buildTasksArray() {
	// Clear the current tasks array
	tasks = [];

	// Select all list items on the page
	const listItems = document.querySelectorAll(".output li");

	// Loop through each list item
	listItems.forEach((item) => {
		// Get the text content and checked status
		const taskName = item.textContent;
		const isChecked = item.classList.contains("ready");

		// Add the task to the tasks array
		tasks.push({ name: taskName, checked: isChecked });
	});

	// Step 7: Save tasks array to local storage
	saveTasks();
}

// Step 8: Save tasks to local storage
function saveTasks() {
	// Convert the tasks array to a JSON string and save it to local storage
	localStorage.setItem("tasklist", JSON.stringify(tasks));
}

// Event listener to add new items to the list
addButton.addEventListener("click", function () {
	// Get the value from the input and trim any extra whitespace
	const newItem = inputElement.value.trim();

	// Check if the input is not empty
	if (newItem !== "") {
		// Create a new task object
		const newTask = { name: newItem, checked: false };

		// Add the new task to the tasks array
		tasks.push(newTask);

		// Build and add the new task item to the page
		buildTaskItem(newTask);

		// Save the updated tasks array to local storage
		saveTasks();

		// Clear the input after adding a new item
		inputElement.value = "";
	}
});

// Build initial tasks list on page load
tasks.forEach(buildTaskItem);
