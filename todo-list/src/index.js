import './style.css'

// Dialog handling for add task button

const addTaskBtn = document.querySelector('.add-btn');
const taskDialog = document.getElementById('task-dialog');
const closeDialogBtn = document.getElementById('close-dialog');
const taskForm = document.getElementById('task-form');
const doneBtn = document.querySelector('.done');

addTaskBtn.addEventListener('click', () => {
  taskDialog.classList.add('active');
});

closeDialogBtn.addEventListener('click', () => {
  taskDialog.classList.remove('active');
  taskForm.reset();
});

doneBtn.addEventListener('click', () => {
  // Handle form submission logic here
  // Create a task object, add it to your todo list, etc.
  taskDialog.classList.remove('active');
  taskForm.reset(); // Reset form fields
});

