let carouselImage = document.querySelector(".carousel-image");
let imageTitle = document.querySelector(".image-title");
let nextBtn = document.querySelector(".next-btn");
let progressIndicators = document.querySelectorAll(".progress-indicator");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector(".navigation-links");

let imageSlides = [
  {
    src: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Strategic Growth",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vbmV5fGVufDB8fDB8fHww",
    title: "Asset Management",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Empowering Investors",
  },
  {
    src: "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Driving Financial Excellence",
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
}, 2000);

nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  currentSlide = (currentSlide + 1) % imageSlides.length;
  updateCarousel();
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % imageSlides.length;
    updateCarousel();
  }, 2000);
});

updateCarousel();




hamburgerMenu.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
