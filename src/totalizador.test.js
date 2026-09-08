import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("deberia calcular el precio neto", () => {
    expect(totalizador(3, 2)).toEqual(6);
  });
});