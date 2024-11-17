let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let captionText = document.getElementById("caption");

    if (n > slides.length) { 
        slideIndex = 1; 
    }

    if (n < 1) { 
        slideIndex = slides.length; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("visible");
    }

    slides[slideIndex - 1].classList.add("visible");
    captionText.innerHTML = slides[slideIndex - 1].getElementsByTagName('img')[0].alt || "";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });
});