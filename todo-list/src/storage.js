const STORAGE_KEY = 'tasks';

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = () => {
  const tasksData = localStorage.getItem(STORAGE_KEY);
  return tasksData ? JSON.parse(tasksData) : [];
};
