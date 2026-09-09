import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia calcular el precio neto", () => {
    expect(totalizador(3, 2)).toEqual(6);
  });

  it("deberia calcular el precio neto", () => {
    expect(totalizador(20, 15)).toEqual(300);
  });

  it("deberia calcular el precio total con el impuesto aplicado para TX (6.25%)", () => {
    expect(totalizador(20, 3, "TX")).toEqual(63.75);
  });

  it("deberia calcular el precio total con el impuesto aplicado para UT (6.65%)", () => {
    expect(totalizador(10, 2, "UT")).toEqual(21.33);
  });

  it("deberia calcular el precio total con el impuesto aplicado para AL (4%)", () => {
    expect(totalizador(15, 4, "AL")).toEqual(62.4);
  });

  it("deberia calcular el precio total con el impuesto aplicado para CA (8.25%)", () => {
    expect(totalizador(25, 2, "CA")).toEqual(54.125);
  });

   it("deberia calcular el precio total con el impuesto aplicado para NV (8%)", () => {
    expect(totalizador(10, 3, "NV")).toEqual(32.4);
  });

  it("deberia aplicar un 3% de descuento y luego el impuesto para ordenes >= 1000 en TX", () => {
    expect(totalizador(1000, 1, "TX")).toEqual(1030.625);
  });

});