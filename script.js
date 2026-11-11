const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("main section[id], header[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a")];

window.addEventListener("scroll", () => {
  const y = window.scrollY + 140;
  let current = "home";
  sections.forEach(section => {
    if (section.offsetTop <= y) current = section.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});
