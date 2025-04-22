import './style.css';
import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderTaskList } from './components/TaskList.js';
import { renderAddTaskButton } from './components/AddTaskButton.js';
import { setupAddTaskModal } from './components/AddTaskModal.js';
import { initTheme } from './utils/themeManager.js';
import { loadTasks } from './services/taskService.js';

// Initialize the application
function initApp() {
  const app = document.getElementById('app');
  
  // Create main layout structure
  app.innerHTML = `
    <header id="app-header" class="app-header"></header>
    <div class="app-container">
      <aside id="app-sidebar" class="app-sidebar"></aside>
      <main class="app-main">
        <div id="task-container" class="task-container">
          <div id="task-list-header" class="task-list-header">
            <h2>All Tasks</h2>
            <div class="view-options">
              <button id="list-view-btn" class="view-btn active" aria-label="List view">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4.5H15M3 9H15M3 13.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
              <button id="grid-view-btn" class="view-btn" aria-label="Grid view">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="3" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  <rect x="10.5" y="3" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  <rect x="3" y="10.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  <rect x="10.5" y="10.5" width="4.5" height="4.5" rx="1" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          <div id="task-list" class="task-list"></div>
        </div>
      </main>
    </div>
    <div id="add-task-container" class="add-task-container"></div>
    <div id="add-task-modal-container" class="modal-container"></div>
  `;
  
  // Initialize components
  renderHeader();
  renderSidebar();
  renderTaskList();
  renderAddTaskButton();
  setupAddTaskModal();
  
  // Set up view toggle
  const listViewBtn = document.getElementById('list-view-btn');
  const gridViewBtn = document.getElementById('grid-view-btn');
  const taskList = document.getElementById('task-list');
  
  listViewBtn.addEventListener('click', () => {
    taskList.classList.remove('grid-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });
  
  gridViewBtn.addEventListener('click', () => {
    taskList.classList.add('grid-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });
}

// Initialize the theme before rendering
initTheme();

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Load tasks on app initialization
loadTasks();