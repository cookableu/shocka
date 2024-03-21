let slideIndex = 0;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

document.getElementById("next").addEventListener("click", function () {
    plusSlides(1);
});

document.getElementById("prev").addEventListener("click", function () {
    plusSlides(-1);
});