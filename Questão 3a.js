function operacao(a, b, operador) {
  if (typeof operador !== "string" || operador.length === 0) throw new Error("Operador inválido");
  switch (operador) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) throw new Error("Divisão por zero");
      return a / b;
    default:
      throw new Error("Operador não suportado");
  }
}


