function obtenerTasaDescuento(neto) {
  if (neto >= 30000) return 0.15;
  if (neto >= 10000) return 0.10;
  if (neto >= 7000) return 0.07;
  if (neto >= 3000) return 0.05;
  if (neto >= 1000) return 0.03;
  return 0;
}

function totalizador(precioUnitario, cantidad, estado = "CA") {

  if (typeof precioUnitario !== "number" || typeof cantidad !== "number" || isNaN(precioUnitario) || isNaN(cantidad)) {
    throw new Error("Información errónea en precio o cantidad");
  }

  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    throw new Error("Cantidad invalida");
  }

  if (precioUnitario <= 0) {
    throw new Error("Precio invalido");
  }

  const neto = precioUnitario * cantidad;
  
  const tasaDescuento = obtenerTasaDescuento(neto);
  const netoConDescuento = neto - (neto * tasaDescuento);

  const tasasImpuesto = { UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, CA: 0.0825 };

  if (!tasasImpuesto.hasOwnProperty(estado)) {
    throw new Error("Código de estado inválido");
  }

  const tasaImpuesto = tasasImpuesto[estado] || 0;
  
  const impuesto = netoConDescuento * tasaImpuesto;
  
  return netoConDescuento + impuesto;
}

export default totalizador;

function cancelarCompra() {
  return 0;
}

export { cancelarCompra };
