const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const form = document.querySelector("form");

yes.addEventListener("click", () => {
  form.className = "visible";
  if (window.innerHeight > window.innerWidth) {
    window.scroll(0, 10000);
  }
});
