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