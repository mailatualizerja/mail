// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
  }
});