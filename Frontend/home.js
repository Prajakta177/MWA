// Function to redirect user when they click the button
function exploreNow() {
    window.location.href = "das.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");

    const images = ["m.png", "m1.png", "m2.png", "m3.png"];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    setInterval(changeBackground, 5000); // Change image every 5 seconds
});

    function navigateTo(page) {
        window.location.href = page;
    }
// Navbar Toggle for Mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Hover effect for clothing items
const clothingItems = document.querySelectorAll(".clothing-item");

clothingItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = "0.3s";
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        { text: "This app helped me organize my wardrobe easily! I love it!", author: "Sarah W." },
        { text: "I can now plan my outfits in advance, such a time-saver!", author: "James D." },
        { text: "Great for keeping track of seasonal trends and favorites.", author: "Emma R." },
        { text: "A must-have for fashion lovers! It keeps everything so organized.", author: "Olivia M." },
        { text: "I never struggle with outfit ideas anymore. Best app ever!", author: "Daniel K." }
    ];

    let currentTestimonial = 0;
    
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialAuthor = document.getElementById("testimonial-author");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateTestimonial(index) {
        testimonialText.textContent = `"${testimonials[index].text}"`;
        testimonialAuthor.textContent = `- ${testimonials[index].author}`;
    }

    prevBtn.addEventListener("click", function () {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener("click", function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 5000);

    // Show the first testimonial initially
    updateTestimonial(currentTestimonial);
});

// Load FontAwesome for icons
const fontAwesome = document.createElement("script");
fontAwesome.src = "https://kit.fontawesome.com/YOUR_KIT_CODE.js"; // Replace with your own FontAwesome Kit
fontAwesome.crossOrigin = "anonymous";
document.head.appendChild(fontAwesome);

// Load Featured Outfits
document.addEventListener("DOMContentLoaded", function () {
    const featuredOutfits = [
        { img: "d1.jpg", name: "Casual Summer", category: "Casual" },
        { img: "d2.jpg", name: "Elegant Evening", category: "Formal" },
        { img: "d3.jpg", name: "Sporty Vibes", category: "Sportswear" },
    ];

    const outfitGrid = document.querySelector(".outfit-grid");
    outfitGrid.innerHTML = "";

    featuredOutfits.forEach(outfit => {
        const outfitElement = document.createElement("div");
        outfitElement.classList.add("outfit-item");
        outfitElement.innerHTML = `
            <img src="${outfit.img}" alt="${outfit.name}">
            <h3>${outfit.name}</h3>
            <p>Category: ${outfit.category}</p>
        `;
        outfitGrid.appendChild(outfitElement);
    });
});

// Load Steps for How It Works Section
document.addEventListener("DOMContentLoaded", function () {
    const stepsData = [
        { img: "images/upload.png", title: "Step 1: Upload Your Clothes", desc: "Take a picture or upload images of your clothes." },
        { img: "images/category.png", title: "Step 2: Organize by Category", desc: "Sort your clothes into categories like casual, formal, or seasonal." },
        { img: "images/plan.png", title: "Step 3: Plan & Save Outfits", desc: "Mix and match clothes to create your favorite outfits." },
        { img: "images/wear.png", title: "Step 4: View & Wear Anytime", desc: "Access your wardrobe and outfits anytime, anywhere." },
    ];

    const stepsContainer = document.querySelector(".steps-container");
    stepsContainer.innerHTML = "";

    stepsData.forEach(step => {
        const stepElement = document.createElement("div");
        stepElement.classList.add("step");
        stepElement.innerHTML = `
            <img src="${step.img}" alt="${step.title}">
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
        `;
        stepsContainer.appendChild(stepElement);
    });
});

// Hover effect for features
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    features.forEach((feature) => {
        feature.addEventListener("mouseenter", () => {
            feature.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
        });

        feature.addEventListener("mouseleave", () => {
            feature.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
