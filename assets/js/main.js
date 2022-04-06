const nav = document.querySelector("#js-nav");
const ham = document.querySelector("#js-hamburger");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
  ham.classList.toggle("active");
});
