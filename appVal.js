const nombre = document.querySelector("#nombre");
const form = document.querySelector("#form");
const celular = document.querySelector("#celular");
const contrasena = document.querySelector("#contrasena");
const confirmar = document.querySelector("#confirmarContrasena");
const errores = document.querySelector("#errores");

form.addEventListener("click", e => {
  e.preventDefault();
  let mensaje = [];
  if (e.target.id === "boton") {
    if (nombre.value === null || nombre.value === "") {
      mensaje.push("nombre no puede quedar vacio");
    }
    if (celular.value === null || celular.value === "") {
      mensaje.push("contraseña no puede quedar vacia");
      if (parseInt(celular.value) != celular.value) {
        mensaje.push("solo puedes usar números");
      }
    }
    if (contrasena.value === null || contrasena.value === "") {
      mensaje.push("contrasena no puede quedar vacio");
      if (contrasena.value < 6 || contrasena.value > 20) {
      }
      console.log(mensaje);
    }
  }
});
