/**
 * Initialize theme from localStorage or system preference
 */
export function initTheme() {
  // Check if theme is stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
  }
}