function contarOvejas(ovejas) {
  // aquí tu magia
  let filtro = [];
  let reg = /.*n.*a|.*a.*n/i;

  ovejas.map((oveja) => {
    if (oveja.color.toLowerCase() === "rojo" && reg.test(oveja.name)) {
      filtro.push(oveja);
    }
  });
  return filtro;
}

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
