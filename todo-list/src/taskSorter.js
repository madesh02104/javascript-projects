export function filterTasks(tasks, filter) {
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  
    switch (filter) {
      case 'all':
        return tasks;
      case 'today':
        return tasks.filter(task => new Date(task.dueDate).toDateString() === new Date().toDateString());
      case 'week':
        return tasks.filter(task => {
          const taskDate = new Date(task.dueDate);
          return taskDate >= startOfWeek && taskDate <= new Date(currentDate.setDate(currentDate.getDate() + 6));
        });
      case 'important':
        return tasks.filter(task => task.priority === 'high');
      case 'expired':
        return tasks.filter(task => new Date(task.dueDate) < new Date());
      default:
        return tasks;
    }
  }
  