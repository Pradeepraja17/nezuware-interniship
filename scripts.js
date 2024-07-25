const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskPriority = document.getElementById('task-priority');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const taskDueDate = taskDate.value;
  const taskPriorityValue = taskPriority.value;

  const task = {
    text: taskText,
    date: taskDueDate,
    priority: taskPriorityValue,
    completed: false
  };

  addTaskToDOM(task);
  taskInput.value = '';
  taskDate.value = '';
}

function addTaskToDOM(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  
  const taskDetails = document.createElement('div');
  taskDetails.classList.add('task-details');
  taskDetails.innerHTML = `
    <span>${task.text}</span>
    <span>Due: ${task.date || 'N/A'}</span>
    <span>Priority: ${task.priority}</span>
  `;

  const taskActions = document.createElement('div');
  taskActions.classList.add('task-actions');

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', () => {
    task.completed = !task.completed;
    taskElement.classList.toggle('completed', task.completed);
  });

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', () => editTask(taskElement, task));

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => taskElement.remove());

  taskActions.append(completeButton, editButton, deleteButton);
  taskElement.append(taskDetails, taskActions);
  taskList.appendChild(taskElement);
}

function editTask(taskElement, task) {
  const newTaskText = prompt('Edit task:', task.text);
  if (newTaskText) {
    task.text = newTaskText;
    taskElement.querySelector('.task-details span').innerText = task.text;
  }
}
