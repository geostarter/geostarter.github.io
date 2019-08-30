const el = document.querySelector("#module");
const ov = document.querySelector("#over");


ov.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX/4 + "px";
  el.style.backgroundPositionY = -e.offsetY/4 + "px";
});