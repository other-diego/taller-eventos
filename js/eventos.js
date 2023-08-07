const div = document.querySelector(".conteiner");

div.addEventListener("click", (e) => {
  if (e.target !== document.querySelector(".btn")) {
    alert("hola soy el div");
  }
});
