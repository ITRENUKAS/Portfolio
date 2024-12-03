// Carousel Navigation
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; // Calculate slide position
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}, 5000);
