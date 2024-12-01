document.addEventListener("DOMContentLoaded", () => {
    const darkModePreference = localStorage.getItem("darkMode");

    if (darkModePreference === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeButton").checked = true;
    }

    const darkModeButton = document.getElementById("darkModeButton");

    darkModeButton.addEventListener("change", () => {
        if (darkModeButton.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true"); 
        } else {

            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false"); 
        }
    });


    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            const filteredMembers = members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");

            const randomMembers = [];
            while (randomMembers.length < 3 && filteredMembers.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredMembers.length);
                randomMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
            }

            const spotlightItems = document.getElementById("spotlight-items");

            randomMembers.forEach(member => {
                const spotlightItem = document.createElement("div");
                spotlightItem.classList.add("spotlight");
                spotlightItem.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="images/${member.image}" alt="${member.name}" class="spotlight-img">
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                `;
                spotlightItems.appendChild(spotlightItem);
            });
        })
        .catch(error => console.error('Error loading the members data:', error));
});
