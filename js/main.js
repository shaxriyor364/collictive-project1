//hamburger
let navLink = document.getElementById("nav-menu");
let navMenu = document.getElementById("hamburger");
navMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

//dark-mode
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const loading = document.getElementById("loading");

const loadingDuration = 5000; // 1.8s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

// AOS
AOS.init();
