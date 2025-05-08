const button = document.querySelector("button");

function greet() {
  const name = prompt("你叫什么名字？");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `你好呀，${name}！很高兴见到你！`;
}

button.addEventListener("click", greet);
