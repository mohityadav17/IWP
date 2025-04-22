import { getTasks, toggleTaskCompletion, deleteTask } from '../services/taskService.js';

/**
 * Renders the task list with all tasks
 */
export function renderTaskList() {
  const taskList = document.getElementById('task-list');
  const tasks = getTasks();
  
  // Clear task list
  taskList.innerHTML = '';
  
  if (tasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        </svg>
        <h3>No tasks yet</h3>
        <p>Create your first task by clicking the + button</p>
      </div>
    `;
    
    // Add styles for empty state
    const style = document.createElement('style');
    style.textContent = `
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-5);
        color: var(--color-on-surface-light);
        text-align: center;
      }
      
      .empty-state svg {
        margin-bottom: var(--spacing-3);
        opacity: 0.6;
      }
      
      .empty-state h3 {
        margin-bottom: var(--spacing-2);
        font-weight: 500;
      }
      
      .empty-state p {
        font-size: 0.9rem;
      }
    `;
    document.head.appendChild(style);
  } else {
    // Render tasks
    tasks.forEach(task => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item', 'slide-up');
      taskItem.dataset.id = task.id;
      
      // Add checked class if task is completed
      const contentClass = task.completed ? 'task-content checked' : 'task-content';
      const checkboxClass = task.completed ? 'task-checkbox checked' : 'task-checkbox';
      
      // Format due date if exists
      let dueDateHtml = '';
      if (task.dueDate) {
        dueDateHtml = `<span class="task-due-date">Due: ${formatDate(task.dueDate)}</span>`;
      }
      
      // Set priority class based on task priority
      let priorityClass = '';
      let priorityLabel = '';
      
      switch (task.priority) {
        case 'high':
          priorityClass = 'priority-high';
          priorityLabel = 'High';
          break;
        case 'medium':
          priorityClass = 'priority-medium';
          priorityLabel = 'Medium';
          break;
        case 'low':
          priorityClass = 'priority-low';
          priorityLabel = 'Low';
          break;
      }
      
      taskItem.innerHTML = `
        <div class="${checkboxClass}" data-id="${task.id}">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12L10 17L19 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="${contentClass}">
          <h3 class="task-title">${task.title}</h3>
          <p class="task-description">${task.description || ''}</p>
          <div class="task-meta">
            ${task.category ? `<span class="task-category">${task.category}</span>` : ''}
            ${task.priority ? `<span class="task-priority ${priorityClass}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 13H20L12 2Z" stroke="currentColor" fill="currentColor"/>
              </svg>
              ${priorityLabel}
            </span>` : ''}
            ${dueDateHtml}
          </div>
        </div>
        <div class="task-actions">
          <button class="task-action-btn edit-task" data-id="${task.id}" aria-label="Edit task">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M11 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H18C18.5523 20 19 19.5523 19 19V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 2.5C18.3284 1.67157 19.6716 1.67157 20.5 2.5C21.3284 3.32843 21.3284 4.67157 20.5 5.5L12 14L8 15L9 11L17.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="task-action-btn delete-task" data-id="${task.id}" aria-label="Delete task">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 11V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      `;
      
      taskList.appendChild(taskItem);
      
      // Add event listener to task checkbox
      const checkbox = taskItem.querySelector('.task-checkbox');
      checkbox.addEventListener('click', () => {
        const taskId = checkbox.dataset.id;
        toggleTaskCompletion(taskId);
        
        // Toggle checked class
        checkbox.classList.toggle('checked');
        taskItem.querySelector('.task-content').classList.toggle('checked');
      });
      
      // Add event listener to delete button
      const deleteButton = taskItem.querySelector('.delete-task');
      deleteButton.addEventListener('click', () => {
        const taskId = deleteButton.dataset.id;
        deleteTask(taskId);
        
        // Remove task item with animation
        taskItem.style.opacity = '0';
        taskItem.style.transform = 'translateY(-10px)';
        taskItem.style.transition = 'opacity 0.3s, transform 0.3s';
        
        setTimeout(() => {
          taskList.removeChild(taskItem);
          
          // Show empty state if no tasks left
          if (taskList.children.length === 0) {
            renderTaskList();
          }
        }, 300);
      });
      
      // Add event listener to edit button
      const editButton = taskItem.querySelector('.edit-task');
      editButton.addEventListener('click', () => {
        const taskId = editButton.dataset.id;
        openEditTaskModal(taskId);
      });
    });
  }
}

/**
 * Opens the edit task modal
 * @param {string} taskId - ID of the task to edit
 */
function openEditTaskModal(taskId) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) return;
  
  // Get modal container
  const modalContainer = document.getElementById('add-task-modal-container');
  modalContainer.classList.add('active');
  
  // Create modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  modal.innerHTML = `
    <div class="modal-header">
      <h2>Edit Task</h2>
      <button class="close-modal-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <form id="edit-task-form">
        <div class="form-group">
          <label for="edit-task-title" class="form-label">Title</label>
          <input type="text" id="edit-task-title" class="form-input" value="${task.title}" required>
        </div>
        <div class="form-group">
          <label for="edit-task-description" class="form-label">Description</label>
          <textarea id="edit-task-description" class="form-textarea">${task.description || ''}</textarea>
        </div>
        <div class="form-group">
          <label for="edit-task-category" class="form-label">Category</label>
          <select id="edit-task-category" class="form-select">
            <option value="">Select category</option>
            <option value="Work" ${task.category === 'Work' ? 'selected' : ''}>Work</option>
            <option value="Personal" ${task.category === 'Personal' ? 'selected' : ''}>Personal</option>
            <option value="Shopping" ${task.category === 'Shopping' ? 'selected' : ''}>Shopping</option>
            <option value="Health" ${task.category === 'Health' ? 'selected' : ''}>Health</option>
          </select>
        </div>
        <div class="form-group">
          <label for="edit-task-priority" class="form-label">Priority</label>
          <select id="edit-task-priority" class="form-select">
            <option value="">Select priority</option>
            <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
            <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
          </select>
        </div>
        <div class="form-group">
          <label for="edit-task-due-date" class="form-label">Due Date</label>
          <input type="date" id="edit-task-due-date" class="form-input" value="${task.dueDate || ''}">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary close-modal-btn">Cancel</button>
      <button class="btn btn-primary" id="save-edit-task-btn">Save Changes</button>
    </div>
  `;
  
  modalContainer.innerHTML = '';
  modalContainer.appendChild(modal);
  
  // Close modal when clicking close button or outside the modal
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
  
  // Save edited task
  const saveButton = document.getElementById('save-edit-task-btn');
  saveButton.addEventListener('click', () => {
    const tasks = getTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) return;
    
    const updatedTask = {
      ...tasks[taskIndex],
      title: document.getElementById('edit-task-title').value,
      description: document.getElementById('edit-task-description').value,
      category: document.getElementById('edit-task-category').value,
      priority: document.getElementById('edit-task-priority').value,
      dueDate: document.getElementById('edit-task-due-date').value
    };
    
    tasks[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Close modal and refresh task list
    modalContainer.classList.remove('active');
    renderTaskList();
  });
}

/**
 * Format date to locale string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString();
}