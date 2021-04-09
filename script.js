const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-bar");
const navlinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navlinks.classList.toggle("nav-links");
  navbar.classList.toggle("change");
});
