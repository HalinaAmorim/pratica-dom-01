function fatorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("n deve ser inteiro não negativo");
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}


