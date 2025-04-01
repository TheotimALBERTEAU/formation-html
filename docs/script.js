document.addEventListener("DOMContentLoaded", function () {
    // Ajouter des retours à la ligne après chaque point
    let description = document.getElementById("description");
    description.innerHTML = description.innerHTML.replace(/\./g, ".<br>");

    // Carrousel d'images
    const images = ["assets/doigby1.jpg", "assets/doigby2.jpg", "assets/doigby3.jpg"];
    let currentIndex = 0;
    const carouselImage = document.getElementById("carousel-image");

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentIndex];
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImage.src = images[currentIndex];
    });
});
