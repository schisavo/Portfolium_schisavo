/* ··················  Swiper 3D controller  ·················· */
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

/* Control the navigation of the swiper */
function Navigate(indx) {
  swiper.slideTo(indx);
  updateActiveLink(indx);
}
/* Update the styles when is change the section */
function updateActiveLink(indx) {
  document.querySelectorAll(".Links li").forEach(li => li.classList.remove("activeLink"));
  document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
  swiper.slideTo(indx);
}
swiper.on("slideChange", () => {
  updateActiveLink(swiper.activeIndex);
})

/* ··················  Buttons Redirection ·················· */
document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", e => {
    const target = parseInt(e.target.dataset.target);
    swiper.slideTo(target);
    updateActiveLink(target);
  });
});




/* Hamburger Menu */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".Links li");

// Open/Close sidebar
hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  hamburgerBtn.classList.toggle("moved");
});

// close when we select a section
links.forEach(li => {
  li.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerBtn.classList.remove("moved");
  });
});


// Carousel of About technologies
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
  bar.style.width = "0%";
  void bar.offsetWidth;
  bar.style.width = "100%";
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "assets/cv.pdf";
    link.download = "sebastian_chisavo_forero_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // reset bar
    bar.style.width = "0%";
  }, 1600);
});
