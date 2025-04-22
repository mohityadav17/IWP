/**
 * Sidebar component with categories and filters
 */
export function renderSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  
  sidebar.innerHTML = `
    <div class="search-container">
      <span class="search-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <input type="text" id="search-input" class="search-input" placeholder="Search tasks...">
    </div>
    
    <div class="sidebar-section">
      <h3 class="sidebar-title">Views</h3>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link active">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 3.75H3.75C3.33579 3.75 3 4.08579 3 4.5V7.5C3 7.91421 3.33579 8.25 3.75 8.25H6.75C7.16421 8.25 7.5 7.91421 7.5 7.5V4.5C7.5 4.08579 7.16421 3.75 6.75 3.75Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14.25 3.75H11.25C10.8358 3.75 10.5 4.08579 10.5 4.5V7.5C10.5 7.91421 10.8358 8.25 11.25 8.25H14.25C14.6642 8.25 15 7.91421 15 7.5V4.5C15 4.08579 14.6642 3.75 14.25 3.75Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M6.75 10.5H3.75C3.33579 10.5 3 10.8358 3 11.25V14.25C3 14.6642 3.33579 15 3.75 15H6.75C7.16421 15 7.5 14.6642 7.5 14.25V11.25C7.5 10.8358 7.16421 10.5 6.75 10.5Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14.25 10.5H11.25C10.8358 10.5 10.5 10.8358 10.5 11.25V14.25C10.5 14.6642 10.8358 15 11.25 15H14.25C14.6642 15 15 14.6642 15 14.25V11.25C15 10.8358 14.6642 10.5 14.25 10.5Z" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <span>All Tasks</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 6L9 12L3 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Today</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="3" y="4.5" width="12" height="10.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M3 7.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6.75 3V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M11.25 3V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>Upcoming</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M9 5.25V9L11.25 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Completed</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3 class="sidebar-title">Categories</h3>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <span class="category-dot" style="background-color: var(--color-primary);"></span>
            <span>Work</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <span class="category-dot" style="background-color: var(--color-secondary);"></span>
            <span>Personal</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <span class="category-dot" style="background-color: var(--color-accent);"></span>
            <span>Shopping</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link">
            <span class="category-dot" style="background-color: var(--color-success);"></span>
            <span>Health</span>
          </a>
        </li>
        <li class="sidebar-menu-item">
          <a href="#" class="sidebar-link add-category-link">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3.75V14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3.75 9H14.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>Add Category</span>
          </a>
        </li>
      </ul>
    </div>
  `;
  
  // Add styles for category dots
  const style = document.createElement('style');
  style.textContent = `
    .category-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }
    
    .add-category-link {
      color: var(--color-primary);
    }
  `;
  
  document.head.appendChild(style);
  
  // Implement search functionality
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', event => {
    const searchTerm = event.target.value.toLowerCase();
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(item => {
      const taskTitle = item.querySelector('.task-title').textContent.toLowerCase();
      const taskDescription = item.querySelector('.task-description').textContent.toLowerCase();
      
      if (taskTitle.includes(searchTerm) || taskDescription.includes(searchTerm)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  // Category filtering
  const categoryLinks = document.querySelectorAll('.sidebar-menu-item a:not(.add-category-link)');
  categoryLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Filter tasks if viewing a category
      if (link.querySelector('.category-dot')) {
        const category = link.querySelector('span:not(.category-dot)').textContent;
        document.getElementById('task-list-header').querySelector('h2').textContent = category;
        
        const taskItems = document.querySelectorAll('.task-item');
        taskItems.forEach(item => {
          const taskCategory = item.querySelector('.task-category')?.textContent;
          
          if (category === 'All Tasks' || taskCategory === category) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      } else {
        // Handle view filters (All, Today, Upcoming, Completed)
        const view = link.querySelector('span').textContent;
        document.getElementById('task-list-header').querySelector('h2').textContent = view;
        
        const taskItems = document.querySelectorAll('.task-item');
        if (view === 'All Tasks') {
          taskItems.forEach(item => item.style.display = 'flex');
        } else if (view === 'Completed') {
          taskItems.forEach(item => {
            if (item.querySelector('.task-checkbox').classList.contains('checked')) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        } else if (view === 'Today') {
          const today = new Date().toLocaleDateString();
          taskItems.forEach(item => {
            const dueDate = item.querySelector('.task-due-date')?.textContent.replace('Due: ', '');
            if (dueDate === today) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        }
      }
    });
  });
}