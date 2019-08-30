const el = document.querySelector("#module");
const ov = document.querySelector("#over");


ov.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});