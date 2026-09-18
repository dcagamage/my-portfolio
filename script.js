// Navbar scroll state
const nav = document.getElementById("siteNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open")),
  );

// Active link on scroll
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const setActive = () => {
  let current = sections[0].id;
  const offset = 90;
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - offset) current = sec.id;
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
};
window.addEventListener("scroll", setActive);
setActive();

// Smooth scroll (native CSS handles it; this ensures offset accuracy for fixed nav)
navAnchors.forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 66, behavior: "smooth" });
    }
  });
});
