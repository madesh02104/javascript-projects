class Task {
    constructor(title, description, dueDate, priority, notes = '') {
      this.id = Date.now(); 
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.completed = false;   
    }
  }
  
  export default Task;