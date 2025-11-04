function perimetroCirculo(raio) {
  if (isNaN(raio) || raio < 0) throw new Error("Raio inválido");
  return 2 * Math.PI * raio;
}

console.log(perimetroCirculo(3)); 
