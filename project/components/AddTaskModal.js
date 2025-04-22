import { addTask } from '../services/taskService.js';
import { renderTaskList } from './TaskList.js';

/**
 * Sets up the add task modal
 */
export function setupAddTaskModal() {
  const modalContainer = document.getElementById('add-task-modal-container');
  
  // Create modal content
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  modal.innerHTML = `
    <div class="modal-header">
      <h2>Add New Task</h2>
      <button class="close-modal-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <form id="add-task-form">
        <div class="form-group">
          <label for="task-title" class="form-label">Title</label>
          <input type="text" id="task-title" class="form-input" placeholder="Enter task title" required>
        </div>
        <div class="form-group">
          <label for="task-description" class="form-label">Description</label>
          <textarea id="task-description" class="form-textarea" placeholder="Enter task description"></textarea>
        </div>
        <div class="form-group">
          <label for="task-category" class="form-label">Category</label>
          <select id="task-category" class="form-select">
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div class="form-group">
          <label for="task-priority" class="form-label">Priority</label>
          <select id="task-priority" class="form-select">
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div class="form-group">
          <label for="task-due-date" class="form-label">Due Date</label>
          <input type="date" id="task-due-date" class="form-input">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary close-modal-btn">Cancel</button>
      <button class="btn btn-primary" id="save-task-btn">Add Task</button>
    </div>
  `;
  
  modalContainer.appendChild(modal);
  
  // Close modal when clicking close button
  const closeButtons = modal.querySelectorAll('.close-modal-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      modalContainer.classList.remove('active');
    });
  });
  
  // Close modal when clicking outside
  modalContainer.addEventListener('click', event => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove('active');
    }
  });
  
  // Save new task
  const saveButton = document.getElementById('save-task-btn');
  saveButton.addEventListener('click', () => {
    const titleInput = document.getElementById('task-title');
    const title = titleInput.value.trim();
    
    if (!title) {
      titleInput.focus();
      return;
    }
    
    const task = {
      title,
      description: document.getElementById('task-description').value.trim(),
      category: document.getElementById('task-category').value,
      priority: document.getElementById('task-priority').value,
      dueDate: document.getElementById('task-due-date').value,
      completed: false,
      id: Date.now().toString()
    };
    
    addTask(task);
    
    // Reset form and close modal
    document.getElementById('add-task-form').reset();
    modalContainer.classList.remove('active');
    
    // Refresh task list
    renderTaskList();
  });
}