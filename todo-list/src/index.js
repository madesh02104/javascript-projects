import './style.css'
import Task from './task.js';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './storage.js';

const addTaskBtn = document.querySelector('.add-btn');
const taskDialog = document.getElementById('task-dialog');
const closeDialogBtn = document.getElementById('close-dialog');
const taskForm = document.getElementById('task-form');
const doneBtn = document.querySelector('.done');
const mainContent = document.querySelector('.main-content');
const editBtn = document.querySelector('.edit');

const storedTasks = loadTasksFromLocalStorage();

const createTaskElement = (task) => {
  const taskElement = document.createElement('div');
  taskElement.classList.add('taskbox');

  const taskLeft = document.createElement('div');
  taskLeft.classList.add('taskbox-left');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('taskbox-title', 'taskbox-hover1');
  taskTitle.textContent = task.title;

  const taskDesc = document.createElement('div');
  taskDesc.classList.add('taskbox-desc', 'taskbox-hover');
  taskDesc.textContent = task.description;

  taskLeft.appendChild(taskTitle);
  taskLeft.appendChild(taskDesc);

  const taskRight = document.createElement('div');
  taskRight.classList.add('taskbox-right');

  const taskRightUp = document.createElement('div');
  taskRightUp.classList.add('taskbox-right-up');
  taskRight.appendChild(taskRightUp);

  const taskRightDown = document.createElement('div');
  taskRightDown.classList.add('taskbox-right-down');
  taskRight.appendChild(taskRightDown);

  const taskDate = document.createElement('div');
  taskDate.classList.add('taskbox-date', 'taskbox-hover1');
  taskDate.textContent = new Date(task.dueDate).toLocaleDateString();
  taskRightUp.appendChild(taskDate);

  const taskNotes = document.createElement('div');
  taskNotes.classList.add('taskbox-notes', 'taskbox-hover');
  const noteIcon = document.createElement('i');
  noteIcon.classList.add('fa-regular', 'fa-note-sticky', 'fa-2x');
  taskNotes.appendChild(noteIcon);
  taskRightUp.appendChild(taskNotes);

  const taskDelete = document.createElement('div');
  taskDelete.classList.add('taskbox-delete', 'taskbox-hover');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'fa-2x');
  taskDelete.appendChild(deleteIcon);
  taskRightUp.appendChild(taskDelete);

  const priorityTag = document.createElement('div');
  priorityTag.classList.add('taskbox-priority-tag');
  priorityTag.textContent = 'Priority\xa0:';

  const taskPriority = document.createElement('div');
  taskPriority.classList.add('taskbox-priority');
  taskPriority.textContent = task.priority;

  if (task.priority == 'low') {
    taskPriority.classList.add('priority-low');
  }
  else if (task.priority == 'medium') {
    taskPriority.classList.add('priority-mid');
  }
  else {
    taskPriority.classList.add('priority-high');
  }

  taskRightDown.appendChild(priorityTag);
  taskRightDown.appendChild(taskPriority);

  taskElement.appendChild(taskLeft);
  taskElement.appendChild(taskRight);

  taskElement.dataset.taskId = task.id;
  return taskElement;
};

const renderTasks = (tasks) => {
  mainContent.innerHTML = '';
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    addDeleteFunctionality(taskElement);
    addTaskBoxClickFunctionality(taskElement, task);
    mainContent.appendChild(taskElement);
  });
};

addTaskBtn.addEventListener('click', () => {
  taskDialog.classList.add('active');
});

closeDialogBtn.addEventListener('click', () => {
  taskDialog.classList.remove('active');
  editBtn.classList.add('hidden');
  doneBtn.classList.remove('hidden');
  taskForm.reset();
});

doneBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!editBtn.classList.contains('hidden')) {
    return;
  }

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const dueDate = document.getElementById('task-due-date').value;
  const priority = document.getElementById('task-priority').value;

  const errorMessage = document.getElementById('error-message');

  if (!title || !description || !dueDate || !priority) {
    errorMessage.textContent = 'Please fill out all required fields: Title, Description, Due Date, and Priority.';
    errorMessage.classList.remove('hidden');

    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 5000);

    return;
  } else {
    errorMessage.classList.add('hidden');
  }

  const newTask = new Task(title, description, dueDate, priority);

  storedTasks.push(newTask);
  saveTasksToLocalStorage(storedTasks);
  renderTasks(storedTasks);
  taskDialog.classList.remove('active');
  taskForm.reset();
});

const deleteTask = (taskId) => {
  const taskIndex = storedTasks.findIndex(task => task.id === parseInt(taskId));

  if (taskIndex !== -1) {
    storedTasks.splice(taskIndex, 1);
    saveTasksToLocalStorage(storedTasks);
  }
};

const addDeleteFunctionality = (taskElement) => {
  const deleteIcon = taskElement.querySelector('.taskbox-delete i');
  deleteIcon.addEventListener('click', () => {
    const taskId = taskElement.dataset.taskId;
    deleteTask(taskId);
    taskElement.remove();
  });
};

const openEditDialog = (task) => {
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-description').value = task.description;
  document.getElementById('task-due-date').value = task.dueDate;
  document.getElementById('task-notes').value = task.notes;
  document.getElementById('task-priority').value = task.priority;

  taskDialog.classList.add('active');

  doneBtn.classList.add('hidden');
  editBtn.classList.remove('hidden');

  editBtn.onclick = (event) => {
    event.preventDefault();

    task.title = document.getElementById('task-title').value;
    task.description = document.getElementById('task-description').value;
    task.dueDate = document.getElementById('task-due-date').value;
    task.notes = document.getElementById('task-notes').value;
    task.priority = document.getElementById('task-priority').value;

    saveTasksToLocalStorage(storedTasks);

    renderTasks(storedTasks);

    taskDialog.classList.remove('active');
    taskForm.reset();

    editBtn.classList.add('hidden');
    doneBtn.classList.remove('hidden');
  };
};

const addTaskBoxClickFunctionality = (taskElement, task) => {
  taskElement.addEventListener('click', (event) => {
    if (!event.target.classList.contains('fa-trash-can')) {
      openEditDialog(task);
    }
  });
};


renderTasks(storedTasks);

