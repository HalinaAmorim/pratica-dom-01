function produtorio(...numeros) {
  if (numeros.length === 0) return 0; // definição: vazio -> 0 (ou 1 dependendo do contexto). Explicaremos.
  
  let produto = 1;
  for (const n of numeros) {
    const val = Number(n);
    if (isNaN(val)) throw new Error("Todos devem ser números");
    produto *= val;
  }
  return produto;
}


