// smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//Dark Mode Toggle with Persistent State
const toggleButton = document.createElement('button');
toggleButton.type = 'button';
toggleButton.textContent = "🌙";
toggleButton.setAttribute('aria-label', 'Toggle dark mode');
toggleButton.style.marginLeft = '1rem';
document.querySelector('header nav').appendChild(toggleButton);

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  toggleButton.textContent = isDark ? '☀️' : '🌙';
}

//Load saved preference from localStorage
const savedPreference = localStorage.getItem('darkMode') || "light";
applyDarkMode(savedPreference === "dark");

//Toggle on button click
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode') ? "dark" : "light";
  const newPreference = isDark === "dark" ? "light" : "dark";
  applyDarkMode(newPreference === "dark");
  localStorage.setItem('darkMode', newPreference);
});


// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert("Thank you for your message, " + name + "!   We will get back to you soon.");
  form.reset();
});