
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;

document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('visible');
      this.innerHTML = '✖️'; // Change to X when open
    } else {
      menu.classList.remove('visible');
      menu.classList.add('hidden');
      this.innerHTML = '&#9776;'; // Change back to hamburger icon
    }
  });