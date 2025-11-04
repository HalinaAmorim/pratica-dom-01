function criarConta(numeroConta, saldoInicial = 0) {
  let saldo = Number(saldoInicial);
  if (isNaN(saldo) || saldo < 0) throw new Error("Saldo inicial inválido");

  return {
    numero: numeroConta,
    depositar(valor) {
      valor = Number(valor);
      if (isNaN(valor) || valor <= 0) throw new Error("Valor de depósito inválido");
      saldo += valor;
      return saldo;
    },
    sacar(valor) {
      valor = Number(valor);
      if (isNaN(valor) || valor <= 0) throw new Error("Valor de saque inválido");
      if (valor > saldo) throw new Error("Saldo insuficiente");
      saldo -= valor;
      return saldo;
    },
    informarSaldo() {
      return Number(saldo.toFixed(2));
    }
  };
}


