import { confirmarCompra, cancelarCompra } from "./totalizador.js";

const form = document.querySelector("#totalizar-form");
const cantidadInput = document.querySelector("#cantidad");
const precioUnitarioInput = document.querySelector("#precio-unitario");
const estadoSelect = document.querySelector("#estado");
const divResultado = document.querySelector("#resultado-div");
const btnCancelar = document.querySelector("#cancelar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number(cantidadInput.value);
  const precioUnitario = Number(precioUnitarioInput.value);
  const estado = estadoSelect.value;

  try {
    const mensaje = confirmarCompra(precioUnitario, cantidad, estado);
    
    divResultado.className = "resultado success";
    divResultado.innerHTML = `<p>✅ ${mensaje}</p>`;
  } catch (error) {
    divResultado.className = "resultado error";
    divResultado.innerHTML = `<p>❌ Error: ${error.message}</p>`;
  }
});

btnCancelar.addEventListener("click", () => {
  cancelarCompra(); 
  
  form.reset();
  divResultado.className = "hidden";
  divResultado.innerHTML = "";
  
  cantidadInput.focus();
});