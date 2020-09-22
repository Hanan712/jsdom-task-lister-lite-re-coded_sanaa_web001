document.addEventListener('DOMContentLoaded', () => {
	// your code here
	let taskList = document.getElementById("tasks");

  document.addEventListener("submit", function(e) {
    e.preventDefault()
    let newTask = document.getElementById("new-task-description");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask.value));
    taskList.appendChild(li);
    e.target.reset();
  })
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
