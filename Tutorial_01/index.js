// import 'index.css';

// Get items from localstorage and parse them
const localTodoTasksArray = JSON.parse(localStorage.getItem('localTodoTasks')) || [];
const localTodosContainer = document.getElementById('local-storage-todos-container');
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

// Get items from session and parse them (vanished items)
const sessionTodoTasksArray = JSON.parse(sessionStorage.getItem('sessionTodoTasks')) || [];
const sessionTodosContainer = document.getElementById('session-storage-todos-container');
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');

function createTodoLiElements(todoArray, sectionType) {
  return todoArray.map((todo, index) => {
    const liElement = document.createElement('li');
    const checkboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    checkboxEle.setAttribute('type', 'checkbox');
    checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);
    checkboxEle.checked = todo.checked;

	// Set attributes and text content for label element
    labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);
    labelEle.textContent = todo.text;

    liElement.append(checkboxEle, labelEle);
    return liElement;
  });
}

// function to store items in localStorage
function updateLocalStorage() {
  localStorage.setItem('localTodoTasks', JSON.stringify(localTodoTasksArray));
}

// function to store items in sessionStorage
function updateSessionStorage() {
  sessionStorage.setItem('sessionTodoTasks', JSON.stringify(sessionTodoTasksArray));
}


function loadTasksFromStorage() {
  const localTodoLiElements = createTodoLiElements(localTodoTasksArray, 'local');
  localTodosContainer.replaceChildren(...localTodoLiElements);

  const sessionTodoLiElements = createTodoLiElements(sessionTodoTasksArray, 'session');
  sessionTodosContainer.replaceChildren(...sessionTodoLiElements);
}

localAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: localInputEle.value };
  localTodoTasksArray.push(newTodoInfo);

  updateLocalStorage(); // Update localStorage
  loadTasksFromStorage(); // Retrieve from localStorage
  localInputEle.value = '';
});

sessionAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: sessionInputEle.value };
  sessionTodoTasksArray.push(newTodoInfo);

  updateSessionStorage();
  loadTasksFromStorage();
  sessionInputEle.value = '';
});

loadTasksFromStorage();
