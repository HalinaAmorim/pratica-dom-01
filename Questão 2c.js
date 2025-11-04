function calcularNotaFinal(n1, n2) {
  [n1, n2].forEach(n => {
    if (isNaN(n) || n < 0 || n > 10) throw new Error("Notas devem ser entre 0 e 10");
  });

  const pesoN1 = 2;
  const pesoN2 = 3;
  const notaFinal = (n1 * pesoN1 + n2 * pesoN2) / (pesoN1 + pesoN2);
  const aprovado = notaFinal >= 7.0;

  return { notaFinal: Number(notaFinal.toFixed(2)), aprovado };
}


