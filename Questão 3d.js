function filtrarImpares(arr) {
  if (!Array.isArray(arr)) throw new Error("Entrada deve ser array");
  return arr.filter(x => Number.isInteger(x) && (x % 2 !== 0));
}


