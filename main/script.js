/* ··················  Card hover in Android ·················· */
if (window.matchMedia("(hover: hover)").matches) { } else {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
}

/* ·················· Carousel of About technologies ·················· */

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


/* ·················· Download CV button ·················· */
document.getElementById("downloadBtn").addEventListener("click", function () {
  const btn = this;
  const bar = btn.querySelector(".progress-bar");

  // Detect browser
  const userLang  = navigator.language || navigator.userLanguage;
  const isSpanish = userLang.startsWith("es");
  
  // select route file
  const filePath = isSpanish ? "assets/es/cv.pdf" : "assets/en/cv.pdf"; 
  
  // bar animation
  bar.style.width = "0%";
  void bar.offsetWidth;
  bar.style.width = "100%";

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "sebastian_chisavo_forero_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Reset bar
    bar.style.width = "0%";
  }, 1600);
});
