

function start() {
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav ul");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });
}

start();




