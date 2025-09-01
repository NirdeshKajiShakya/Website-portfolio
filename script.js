const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);


const navToggle = $('#navToggle');
const navLinks = $('#navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const themeToggle = $('#themeToggle');
const root = document.documentElement;
const THEME_KEY = 'pref-theme';

function setTheme(name){
    if(name === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, name);
}

themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark')
});

(function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if(saved) return setTheme(saved);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
})();

const resumeBtn = $('#downloadResume');
resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('Nirdesh Kaji Shakya.pdf', '_blank');
});