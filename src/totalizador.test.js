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

  it("deberia calcular el precio total con el impuesto aplicado para NV (8%)", () => {
    expect(totalizador(10, 3, "NV")).toEqual(32.4);
  });

});