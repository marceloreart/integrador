const valor_ticket = 200;

const estudiante = 80;
const trainee = 50;
const junior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let total = document.getElementById("total_pago");
let alertPago = document.getElementById("alertPago");

let borrar = document.getElementById("borrar");
let resumen = document.getElementById("resumen");

// FUNCION PARA QUITAR CLASE DE ERROR
function quitarClaseError() {
  let x = document.querySelectorAll(".form-control, .form-select");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("is-invalid");
  }
}

//CALCULA EL VALOR TOTAL DEL TICKET
function valor_total_ticket() {
  //1° QUITA LA CLASE ERROR
  quitarClaseError();

  //2° VALIDA CAMPOS
  if (nombre.value === "") {
    alert("Por favor, escribí tu nombre");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
  }

  if (apellido.value === "") {
    alert("Por favor, escribí tu apellido");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
  }
  //VALIDACIÓN DE EMAIL
  if (email.value === "") {
    alert("Por favor, escribí tu correo");
    email.classList.add("is-invalid");
    email.focus();
    return;
  }

  //DETERMINAR SI ES MAIL REAL O NO
  const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!emailValido(email.value)) {
    alert("Por favor, escribí un correo válido");
    email.classList.add("is-invalid");
    email.focus();
    return;
  }

  // VERIFICO SI QUE ELIJAN AL MENOS 1 TICKET SINO ERROR
  if (cantidad.value == 0 || isNaN(cantidad.value)) {
    alert("Por favor, ingresá una cantidad correcta");
    cantidad.classList.add("is-invalid");
    cantidad.focus();
    return;
  }

  //VALOR TICKET
  let valorTotalTicket = cantidad.value * valor_ticket;

  //VALIDACIÓN CATEGORÍAS
  if (categoria.value == 0) {
    valorTotalTicket;
  }
  if (categoria.value == 1) {
    valorTotalTicket = valorTotalTicket - (estudiante / 100) * valorTotalTicket;
    alertPago.classList.remove("alert-light");
    alertPago.classList.add("alert-primary");
  }
  if (categoria.value == 2) {
    valorTotalTicket = valorTotalTicket - (trainee / 100) * valorTotalTicket;
    alertPago.classList.remove("alert-light");
    alertPago.classList.add("alert-info");
  }
  if (categoria.value == 3) {
    valorTotalTicket = valorTotalTicket - (junior / 100) * valorTotalTicket;
    alertPago.classList.remove("alert-light");
    alertPago.classList.add("alert-warning");
  }

  //INSERTO EL VALOR EN EL HTML

  total_pago.innerHTML = valorTotalTicket;
  total_pago.focus();
}

resumen.addEventListener("click", valor_total_ticket);

borrar.addEventListener("click", () => {
  quitarClaseError();
  total_pago.innerHTML = "";
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = 0;
  alertPago.classList.remove("alert-primary");
  alertPago.classList.remove("alert-info");
  alertPago.classList.remove("alert-warning");
  alertPago.classList.add("alert-light");
});
