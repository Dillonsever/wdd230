function showMeetAndGreetBanner() {
    const daysToShowBanner = [1, 2, 3]; 
    const today = new Date().getDay(); 
    const banner = document.getElementById("meetGreetBanner");

    if (daysToShowBanner.includes(today)) {
        banner.style.display = "block"; 

        const closeBannerButton = document.getElementById("closeBanner");
        closeBannerButton.addEventListener("click", () => {
            banner.style.display = "none"; 
        });
    } 
}

showMeetAndGreetBanner(); 
