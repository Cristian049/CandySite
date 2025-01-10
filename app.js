const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const linksCont = document.querySelector(".linksCont");
const navbarContainer = document.querySelector(".navbarContainer");
const links = document.querySelector(".links");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

hamburger.addEventListener("click", () => {
  linksCont.classList.toggle("show");
  navbarContainer.classList.toggle("column");
  links.classList.toggle("column");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    linksCont.classList.remove("show");
    navbarContainer.classList.remove("column");
    links.classList.remove("column");
  }
});
