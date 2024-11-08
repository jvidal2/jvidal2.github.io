const galleryImages = [
    { src: "images/mechanicalbull2.jpeg", caption: "Mechanical bull setup" },
    { src: "images/partybouncehouse.jpeg", caption: "Bouncy house at event" },
    { src: "images/tablesandchairs.jpeg", caption: "Tables and chairs at event" },
    { src: "images/partymechbull.jpeg", caption: "Mechanical bull in action" },
    { src: "images/partymechbull3.jpeg", caption: "Our mechanical bull is perfect for all ages!" }
];

let currentIndex = 0;

function updateImage() {
    const currentImage = document.getElementById("current-image");
    const caption = document.getElementById("caption");
    
    currentImage.src = galleryImages[currentIndex].src;
    caption.textContent = galleryImages[currentIndex].caption;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateImage();
}

document.addEventListener("DOMContentLoaded", () => {
    updateImage();

    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);
});
