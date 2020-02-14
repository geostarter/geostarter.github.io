var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var moving = false;

img1.addEventListener("mousemove", move);



function move(e){

  var newX = e.offsetX/4 + "px";
  var newY = e.offsetY/4 + "px";

  img2.style.left = newX;
  img2.style.top = newY;

  
}

