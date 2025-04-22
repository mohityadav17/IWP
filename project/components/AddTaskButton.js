/**
 * Renders the floating action button to add a new task
 */
export function renderAddTaskButton() {
  const container = document.getElementById('add-task-container');
  
  container.innerHTML = `
    <button id="add-task-btn" class="add-task-button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;
  
  // Add event listener to open add task modal
  const addTaskButton = document.getElementById('add-task-btn');
  addTaskButton.addEventListener('click', () => {
    const modalContainer = document.getElementById('add-task-modal-container');
    modalContainer.classList.add('active');
  });
}