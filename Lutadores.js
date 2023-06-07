function solucao(peso1, peso2) {
  let categoriaPeso1, categoriaPeso2;

  if (peso1 < 55) {
    categoriaPeso1 = "Peso leve";
  } else if (peso1 < 65) {
    categoriaPeso1 = "Peso meio-médio";
  } else if (peso1 < 75) {
    categoriaPeso1 = "Peso médio";
  } else if (peso1 < 85) {
    categoriaPeso1 = "Peso meio-pesado";
  } else {
    categoriaPeso1 = "Peso pesado";
  }

  if (peso2 < 55) {
    categoriaPeso2 = "Peso leve";
  } else if (peso2 < 65) {
    categoriaPeso2 = "Peso meio-médio";
  } else if (peso2 < 75) {
    categoriaPeso2 = "Peso médio";
  } else if (peso2 < 85) {
    categoriaPeso2 = "Peso meio-pesado";
  } else {
    categoriaPeso2 = "Peso pesado";
  }

  if (categoriaPeso1 === categoriaPeso2) {
    return "PODEM LUTAR";
  } else {
    return "NAO PODEM LUTAR";
  }
}

const peso1 = 60;
const peso2 = 101;
const resultado = solucao(peso1, peso2);
console.log(resultado);
