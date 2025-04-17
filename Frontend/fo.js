// Function to redirect when an outfit is clicked
document.addEventListener("DOMContentLoaded", function () {
    let outfitLinks = document.querySelectorAll(".outfit-item");

    outfitLinks.forEach(outfit => {
        outfit.addEventListener("click", function () {
            let outfitName = this.querySelector("h3").textContent;
            
            if (outfitName === "Casual Summer") {
                window.location.href = "casual-summer.html";
            } else if (outfitName === "Elegant Evening") {
                window.location.href = "elegant-evening.html";
            } else if (outfitName === "Sporty Vibes") {
                window.location.href = "sporty-vibes.html";
            }
        });
    });
});

// Function to add an outfit to favorites
function addToFavorites(outfitName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!favorites.includes(outfitName)) {
        favorites.push(outfitName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(outfitName + " added to favorites!");
    } else {
        alert(outfitName + " is already in your favorites.");
    }
}

// Function to customize an outfit (Placeholder for future feature)
function customizeOutfit() {
    alert("Customization feature is coming soon!");
}
