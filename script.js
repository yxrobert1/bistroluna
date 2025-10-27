document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.getElementById("toTop");
  const textarea = document.getElementById("message");
  const counter = document.getElementById("charCount");

  const sidebar = document.getElementById('menu-side-bar');
const menuToggles = document.querySelectorAll('.menu-toggle');

menuToggles.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.toggle('show');
  });
});


sidebar.addEventListener('click', (event) => {
  event.stopPropagation();
});

window.addEventListener('click', () => {
  sidebar.classList.remove('show');
});


  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (textarea && counter) {
    const max = textarea.getAttribute("maxlength");
    textarea.addEventListener("input", () => {
      const length = textarea.value.length;
      counter.textContent = `${length} / ${max} caractere`;
    });
  }
});
