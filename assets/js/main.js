/* ===== DARK MODE ===== */
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

function toggleDarkMode() {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
}

/* ===== RESET SCROLL ON REFRESH ===== */
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }
});

/* ===== SCROLL PROGRESS ===== */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  document.getElementById("scroll-progress").style.width = `${progress}%`;
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => navObserver.observe(section));

/* ===== REVEAL ANIMATION ===== */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach(section => {
  revealObserver.observe(section);
});
