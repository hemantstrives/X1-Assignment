// -----------Home page Slider------------------- 
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBttn = document.getElementById("prevBttn");
    const nextBttn = document.getElementById("nextBttn");
    const progressBar = document.querySelector(".progress-bar");
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    // Function to update button states
    function updateButtons() {
        prevBttn.classList.toggle("disabled", currentIndex === 0);
        nextBttn.classList.toggle("disabled", currentIndex === totalSlides - 1);
    }
    // Function to update progress bar animation
    function updateProgressBar() {
        progressBar.style.transition = "none"; // Reset transition
        progressBar.style.width = "0%"; // Restart from 0%
        setTimeout(() => {
            progressBar.style.transition = "width 5s linear"; // Smooth fill animation
            progressBar.style.width = "100%";
        }, 10);
    }
    // Function to move slides for buttons (Desktop)
    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= totalSlides) {
            currentIndex = totalSlides - 1; // Stay at the last slide
        }
        slider.scrollTo({
            left: currentIndex * window.innerWidth, // Move slider
            behavior: "smooth"
        });
        updateButtons(); // Update arrow buttons
        updateProgressBar(); // Restart progress bar
        restartAutoSlide(); // Reset auto-slide timer
    }
    // Function to auto-slide every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalSlides - 1) {
                moveSlide(1);
            } else {
                currentIndex = 0;
                slider.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
                updateButtons();
                updateProgressBar();
            }
        }, 5000);
    }
    // Function to reset auto-slide timer on manual navigation
    function restartAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    // Detect manual scrolling and update index
    slider.addEventListener("scroll", () => {
        let newIndex = Math.round(slider.scrollLeft / window.innerWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateButtons();
            restartAutoSlide();
        }
    });
    // Event Listeners for Buttons (Desktop)
    prevBttn.addEventListener("click", () => moveSlide(-1));
    nextBttn.addEventListener("click", () => moveSlide(1));
    // Initialize
    updateButtons();
    updateProgressBar();
    startAutoSlide();
});

// -----------Categories Nominees scroll------------------- 
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scrollContainer");
    const mainContainer = document.getElementById("cat-nom-wrapper");
    console.log(mainContainer,">>>>>>>>>>>>>>");
    const containerOffset = mainContainer.offsetTop; // Get top position of the slider
    const scrollSpeed = 0.5;

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        
        if (scrollY >= containerOffset) { // Only activate when section is reached
            scrollContainer.scrollLeft = (scrollY - containerOffset) * scrollSpeed;
        }
    });
});


// -------Blog slider------------
const blogContainer = document.querySelector(".blog-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update buttons state
function updateButtons() {
    if (window.innerWidth > 768) { // Only apply on desktop
        prevBtn.classList.toggle("disabled", blogContainer.scrollLeft === 0);
        nextBtn.classList.toggle("disabled", blogContainer.scrollLeft + blogContainer.clientWidth >= blogContainer.scrollWidth);
    }
}

// Scroll Left
prevBtn.addEventListener("click", () => {
    blogContainer.scrollBy({ left: -448, behavior: "smooth" });
});

// Scroll Right
nextBtn.addEventListener("click", () => {
    blogContainer.scrollBy({ left: 448, behavior: "smooth" });
});

// Listen for Scroll & Resize Events
blogContainer.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);

// Initial Check on Page Load
updateButtons();

