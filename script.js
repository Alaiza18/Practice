const Selection = document.getElementById("Dropdown");
const reset = document.getElementById("Reset");
const random = document.getElementById("Random");

Selection.onchange = function(){
  const motor = document.getElementById("motor");
  motor.style.backgroundColor = Selection.value;
}

reset.onclick = function(){
  motor.style.backgroundColor = "white";
}

random.onclick = function(){
  let red = Math.floor(Math.random()  * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;

  motor.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}