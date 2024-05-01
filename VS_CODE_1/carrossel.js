window.addEventListener('load', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides img");
    const totalSlides = slides.length;

    document.querySelector(".btn-prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".btn-next").addEventListener("click", function() {
        changeSlide(1);
    });

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        const slideWidth = slides[currentSlide].clientWidth;
        document.querySelector(".slides").style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
});