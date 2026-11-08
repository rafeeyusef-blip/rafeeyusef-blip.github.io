document.addEventListener('DOMContentLoaded', () => {
// Interactive Feature 1: Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
navToggle.addEventListener('click', () => {
const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
navToggle.setAttribute('aria-expanded', !isExpanded);
navLinks.classList.toggle('active');
});
}

// Interactive Feature 2: Theme Switcher (Light/Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
document.documentElement.setAttribute('data-theme', 'light');
if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
}

if (themeToggle) {
themeToggle.addEventListener('click', () => {
const activeTheme = document.documentElement.getAttribute('data-theme');
if (activeTheme === 'light') {
document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme', 'dark');
themeToggle.textContent = '🌙 Dark Mode';
} else {
document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
themeToggle.textContent = '☀️ Light Mode';
}
});
}
});