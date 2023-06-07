function solucao(olhosNasLaterais) {
  if (olhosNasLaterais === true) {
    return "PRESA";
  } else if (olhosNasLaterais === false) {
    return "PREDADOR";
  }
}

const olhosNasLaterais = true;
const resultado = solucao(olhosNasLaterais);
console.log(resultado);
