const body = document.body;
const head = document.querySelector(".header");
const nav = document.querySelector("#js-nav");
const ham = document.querySelector("#js-hamburger");

//ハンバーガーメニューのタップした際のクラス付与とiOSのスクロール禁止用関数
window.onload = function () {
  ham.addEventListener("click", () => {
    body.classList.toggle("active");
    head.classList.toggle("active");
    nav.classList.toggle("active");
    ham.classList.toggle("active");

    function disableScroll(e) {
      e.preventDefault();
    }

    document.addEventListener("touchmove", disableScroll);
  });
};
