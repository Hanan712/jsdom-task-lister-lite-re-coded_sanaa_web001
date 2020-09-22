document.addEventListener('DOMContentLoaded', () => {
	// your code here
	const form = document.getElementById('create-task-form')
const newTask = document.getElementById('new-task-description')
const todoList = document.getElementById('tasks')
 //listen to `submit` event on the form, use preventDefault()
form.addEventListener("submit", function(event) {
	const li = document.createElement('li')
	li.innerHTML = newTask.value
	todoList.appendChild(li);
	event.preventDefault();
});
	const taskList = new TaskList();

	const newTaskForm = document.getElementById('create-task-form');
	const newTaskDescription = document.getElementById('new-task-description');
	const newTaskPriority = document.getElementById('list');

	const taskUl = document.getElementById('tasks');

	const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

	console.log();

	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		taskList.createNewTask(newTaskDescription.value);
		e.target.reset();
		renderApp();
	});

	taskUl.addEventListener('click', (e) => {
		if (e.target.nodeName === 'Button') {
			taskList.deleteTask(e.target.dataset.description);
			renderApp();
		}
	});
});
 14  src/task.js
Viewed
@@ -0,0 +1,14 @@
class Task {
	constructor(description) {
		this.description = description;
	}

	render() {
		return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
	}  // your code here
});
