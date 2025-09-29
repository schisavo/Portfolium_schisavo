/* Swiper controller */
const swiper = new Swiper(".swiper", {
  effect: "cube",
  allowTouchMove: false,
  grabCursor: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function Navigate(indx) {
  document.querySelectorAll(".Links li").forEach(li => li.classList.remove("activeLink"));
  document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
  swiper.slideTo(indx);
}

/* Hamburger Menu */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".Links li");

// abrir/cerrar menú
hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  hamburgerBtn.classList.toggle("moved");
});

// cerrar al dar clic en un link
links.forEach(li => {
  li.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerBtn.classList.remove("moved");
  });
});


// Carrusel manual About
const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".skill-card");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
});


/* Download CV button */
document.getElementById("downloadBtn").addEventListener("click", function () {
  const btn = this;
  const bar = btn.querySelector(".progress-bar");
  // restart animation
  bar.style.width = "0%";

  // fuerza un reflow para que la transición se aplique
  void bar.offsetWidth;

  // empieza animación
  bar.style.width = "100%";

  // al terminar animación, dispara descarga
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "assets/cv.pdf"; // ruta de tu CV
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // reset bar
    bar.style.width = "0%";
  }, 1600);
});
