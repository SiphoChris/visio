let carouselImage = document.querySelector(".carousel-image");
let imageTitle = document.querySelector(".image-title");
let nextBtn = document.querySelector(".next-btn");
let progressIndicators = document.querySelectorAll(".progress-indicator");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector(".navigation-links");

let imageSlides = [
  {
    src: "https://picsum.photos/800/450?random=1",
    title: "Beautiful Landscape",
  },
  {
    src: "https://picsum.photos/800/450?random=2",
    title: "Sunset Over the Ocean",
  },
  {
    src: "https://picsum.photos/800/450?random=3",
    title: "Mountain Peaks",
  },
  {
    src: "https://picsum.photos/800/450?random=4",
    title: "City Lights at Night",
  },
];

let currentSlide = 0;

function updateCarousel() {
  carouselImage.src = imageSlides[currentSlide].src;
  imageTitle.innerText = imageSlides[currentSlide].title;

  progressIndicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

let slideInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % imageSlides.length;
  updateCarousel();
}, 3000);

nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  currentSlide = (currentSlide + 1) % imageSlides.length;
  updateCarousel();
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % imageSlides.length;
    updateCarousel();
  }, 3000);
});

updateCarousel();




hamburgerMenu.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
