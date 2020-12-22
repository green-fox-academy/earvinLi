let catOrbit = document.querySelector("#catOrbit");
let hat = document.querySelector("#hat");

let angle = 0;
let lastTime = null;

function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;

  catOrbit.style.top = (Math.sin(angle) * 40 + 40) + "px";
  catOrbit.style.left = (Math.cos(angle) * 200 + 230) + "px";

  hat.style.top = (Math.sin(angle + Math.PI) * 72) + "px";
  hat.style.left = (Math.cos(angle + Math.PI) * 72) + "px";

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
