document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.getElementById("toTop");
  const textarea = document.getElementById("message");
  const counter = document.getElementById("charCount");

  const sidebar = document.getElementById('menu-side-bar');
const menuToggles = document.querySelectorAll('.menu-toggle');

// Când dai click pe oricare buton cu clasa .menu-toggle
menuToggles.forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation(); // oprește propagarea (ca să nu se închidă imediat)
    sidebar.classList.toggle('show'); // comută vizibilitatea
  });
});

// Când dai click în interiorul sidebar-ului, nu-l închide
sidebar.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Când dai click oriunde în afară, închide sidebar-ul
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
