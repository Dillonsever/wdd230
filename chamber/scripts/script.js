
document.getElementById('last-modified').textContent = document.lastModified;


const darkModeButton = document.getElementById('darkModeButton');


const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = 'Switch to Light Mode';
}

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        darkModeButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
});
//  This is to push code/