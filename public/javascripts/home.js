const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const form = document.querySelector("form");

yes.addEventListener("click", () => {
  form.className = "visibleM";
  if (window.innerHeight > window.innerWidth) {
    window.scroll(0, 10000);
  }
  document.getElementById('number').focus()
});
