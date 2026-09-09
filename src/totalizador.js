function totalizador(precioUnitario, cantidad, estado = "") {
  const neto = precioUnitario * cantidad;
  const tasasImpuesto = { UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, CA: 0.0825 };
  
  const tasa = tasasImpuesto[estado] || 0;
  const impuesto = neto * tasa;
  
  return neto + impuesto;
}

export default totalizador;