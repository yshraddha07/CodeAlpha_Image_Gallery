const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const close = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

images.forEach(function(image) {
    image.addEventListener("click", function() {
        currentIndex = Number(image.dataset.index);
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
}

next.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

prev.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

close.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
