import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadValue = Number.parseInt(cantidad.value);
  const precioUnitarioValue = Number.parseFloat(precioUnitario.value);

  div.innerHTML = "<p>" + totalizador(precioUnitarioValue, cantidadValue) + "</p>";
});
