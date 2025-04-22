/**
 * Header component with app title, theme toggle and user profile
 */
export function renderHeader() {
  const header = document.getElementById('app-header');
  
  header.innerHTML = `
    <div class="header-content">
      <div class="header-left">
        <button id="sidebar-toggle" class="sidebar-toggle" aria-label="Toggle sidebar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="app-brand">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <h1 class="app-title">TaskFlow</h1>
        </div>
      </div>
      <div class="header-right">
        <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
          <svg id="theme-icon-light" class="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M18.36 5.64L19.78 4.22M4.22 19.78L5.64 18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg id="theme-icon-dark" class="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" style="display: none;">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="user-profile">
          <div class="user-avatar">
            <span>JD</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add styles to header components
  const style = document.createElement('style');
  style.textContent = `
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    
    .header-left, .header-right {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }
    
    .app-brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }
    
    .app-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-primary);
    }
    
    .sidebar-toggle {
      display: none;
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      color: var(--color-on-surface);
      transition: background-color var(--transition);
    }
    
    .sidebar-toggle:hover {
      background-color: var(--color-surface-variant);
    }
    
    .theme-toggle {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-on-surface);
      transition: background-color var(--transition);
    }
    
    .theme-toggle:hover {
      background-color: var(--color-surface-variant);
    }
    
    .user-profile {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
    }
    
    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: var(--color-primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 0.85rem;
    }
    
    @media (max-width: 768px) {
      .sidebar-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `;
  
  document.head.appendChild(style);
  
  // Toggle sidebar on mobile
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('app-sidebar');
  
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
  
  // Toggle theme
  const themeToggle = document.getElementById('theme-toggle');
  const themeIconLight = document.getElementById('theme-icon-light');
  const themeIconDark = document.getElementById('theme-icon-dark');
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle theme icons
    if (newTheme === 'dark') {
      themeIconLight.style.display = 'none';
      themeIconDark.style.display = 'block';
    } else {
      themeIconLight.style.display = 'block';
      themeIconDark.style.display = 'none';
    }
  });
  
  // Set initial theme icon based on current theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  if (currentTheme === 'dark') {
    themeIconLight.style.display = 'none';
    themeIconDark.style.display = 'block';
  }
}