function calcularTotal(valorUnitario, quantidade, desconto = 0, tipoDesconto = 'percent') {
  if (isNaN(valorUnitario) || valorUnitario < 0) throw new Error("valorUnitario inválido");
  if (!Number.isInteger(quantidade) || quantidade <= 0) throw new Error("quantidade inválida");
  if (isNaN(desconto) || desconto < 0) throw new Error("desconto inválido");

  let subtotal = valorUnitario * quantidade;
  let total;

  if (tipoDesconto === 'percent') {
    if (desconto > 100) desconto = 100; // limite
    total = subtotal * (1 - desconto / 100);
  } else if (tipoDesconto === 'valor') {
    total = subtotal - desconto;
  } else {
    throw new Error("tipoDesconto inválido");
  }

  if (total < 0) total = 0;
  return Number(total.toFixed(2));
}

