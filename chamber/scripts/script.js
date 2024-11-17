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
        localStorage.setItem('theme', 'dark'); 
    } else {
        darkModeButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); 
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = Date.now();
});

async function fetchMembers(view = 'grid') {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        renderMembers(members, view);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function renderMembers(members, view) {
    const directory = document.getElementById('directory');
    directory.className = view === 'grid' ? 'grid-view' : 'list-view';
    directory.innerHTML = members.map(member => `
        <div class="member-card">
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
        </div>
    `).join('');
}

document.getElementById('grid-view').addEventListener('click', () => fetchMembers('grid'));
document.getElementById('list-view').addEventListener('click', () => fetchMembers('list'));

fetchMembers('grid');
