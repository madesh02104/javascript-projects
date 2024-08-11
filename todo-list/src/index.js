import './style.css'
import Task from './task.js';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from './storage.js';

const addTaskBtn = document.querySelector('.add-btn');
const taskDialog = document.getElementById('task-dialog');
const closeDialogBtn = document.getElementById('close-dialog');
const taskForm = document.getElementById('task-form');
const doneBtn = document.querySelector('.done');
const mainContent = document.querySelector('.main-content');

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
    mainContent.appendChild(taskElement);
  });
};

addTaskBtn.addEventListener('click', () => {
  taskDialog.classList.add('active');
});

closeDialogBtn.addEventListener('click', () => {
  taskDialog.classList.remove('active');
  taskForm.reset();
});

doneBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const dueDate = document.getElementById('task-due-date').value;
  const priority = document.getElementById('task-priority').value;
  const newTask = new Task(title, description, dueDate, priority);

  storedTasks.push(newTask);
  saveTasksToLocalStorage(storedTasks);
  renderTasks(storedTasks);
  taskDialog.classList.remove('active');
  taskForm.reset();
});

mainContent.addEventListener('click', (event) => {
  const target = event.target;
  const taskElement = target.closest('.taskbox');

  if (taskElement && !target.closest('.taskbox-delete')) {
    const taskId = taskElement.dataset.taskId;
    const task = storedTasks.find(task => task.id === taskId);

    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;

    taskDialog.classList.add('active');
  }

  if (target.closest('.taskbox-delete')) {
    const taskId = target.closest('.taskbox').dataset.taskId;
    storedTasks = storedTasks.filter(task => task.id !== taskId);
    saveTasksToLocalStorage(storedTasks);
    renderTasks(storedTasks);
  }
});

renderTasks(storedTasks);

