function solucao(pesos) {
  const diferencaPeso = Math.abs(pesos[0] - pesos[1]);
  
  if (diferencaPeso > 5) {
    return "NAO PODEM LUTAR";
  } else {
    return "PODEM LUTAR";
  }
}

const pesos = [50, 53];
const resultado = solucao(pesos);
console.log(resultado);