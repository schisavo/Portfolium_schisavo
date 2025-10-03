document.addEventListener("DOMContentLoaded", () => {
  // Projects filter
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

      const valor = filter.getAttribute("data-nombre");

      projects.forEach(project => {
        if (valor === "todos" || project.classList.contains(valor)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // Scroll sections
  const enlaces = {
    "enlace-inicio": 0,
    "enlace-equipo": document.getElementById("equipo"),
    "enlace-servicio": document.getElementById("servicio"),
    "enlace-trabajo": document.getElementById("trabajo"),
    "enlace-contacto": document.getElementById("contacto"),
  };

  Object.keys(enlaces).forEach(id => {
    const enlace = document.getElementById(id);
    if (!enlace) return;

    enlace.addEventListener("click", e => {
      e.preventDefault();
      let target = enlaces[id];

      let offsetTop = typeof target === "number" ? target : target.offsetTop - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener("resize", () => {
    enlaces["enlace-equipo"] = document.getElementById("equipo");
    enlaces["enlace-servicio"] = document.getElementById("servicio");
    enlaces["enlace-trabajo"] = document.getElementById("trabajo");
    enlaces["enlace-contacto"] = document.getElementById("contacto");
  });
});
