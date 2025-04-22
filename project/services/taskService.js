/**
 * Get all tasks from localStorage
 * @returns {Array} Array of task objects
 */
export function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

/**
 * Add a new task
 * @param {Object} task - Task object
 */
export function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Delete a task by ID
 * @param {string} taskId - Task ID
 */
export function deleteTask(taskId) {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

/**
 * Toggle task completion status
 * @param {string} taskId - Task ID
 */
export function toggleTaskCompletion(taskId) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

/**
 * Edit a task
 * @param {string} taskId - Task ID
 * @param {Object} updatedTask - Updated task data
 */
export function editTask(taskId, updatedTask) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

/**
 * Load initial sample tasks if none exist
 */
export function loadTasks() {
  const tasks = getTasks();
  
  if (tasks.length === 0) {
    // Add sample tasks
    const sampleTasks = [
      {
        id: '1',
        title: 'Complete project proposal',
        description: 'Draft the initial proposal for the new client project including timeline and resource estimates.',
        category: 'Work',
        priority: 'high',
        dueDate: '2025-01-20',
        completed: false
      },
      {
        id: '2',
        title: 'Buy groceries',
        description: 'Milk, eggs, bread, fruits, and vegetables for the week.',
        category: 'Shopping',
        priority: 'medium',
        dueDate: '2025-01-15',
        completed: true
      },
      {
        id: '3',
        title: 'Morning jog',
        description: 'Run for 30 minutes in the park.',
        category: 'Health',
        priority: 'low',
        dueDate: '2025-01-16',
        completed: false
      }
    ];
    
    localStorage.setItem('tasks', JSON.stringify(sampleTasks));
  }
}