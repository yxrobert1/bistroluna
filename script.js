document.getElementById("toTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const textarea = document.getElementById('message');
const counter = document.getElementById('charCount');
const max = textarea.getAttribute('maxlength');

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  counter.textContent = `${length} / ${max} caractere`;
});

