function ehPrimo(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  const limite = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function somaPrimos(arr) {
  if (!Array.isArray(arr)) throw new Error("Entrada deve ser array");
  let soma = 0;
  for (const num of arr) {
    const n = parseInt(num, 10);
    if (n > 0 && ehPrimo(n)) soma += n;
  }
  return soma;
}

