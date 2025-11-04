function converterReaisParaDolar(valorReais, cotacaoDolar) {

  if (isNaN(valorReais) || isNaN(cotacaoDolar)) throw new Error("Valores inválidos");
  if (cotacaoDolar <= 0) throw new Error("Cotação deve ser > 0");

  const valorDolar = valorReais / cotacaoDolar;
  return Number(valorDolar.toFixed(2)); // formatado com 2 casas
}


