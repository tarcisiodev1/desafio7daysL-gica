const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(numero);
console.log(numero);
console.log(numero);
let numeroEscolhido = parseFloat(
  prompt(`JOGO DE ADIVINHA NÚMERO ENTRE DE 1 ATÉ 10:
 Escolha um numero:`)
);

if (numeroEscolhido === numero) {
  alert(`Você acertou o numero, parabens!!!`);
} else {
  while (numeroEscolhido !== numero) {
    numeroEscolhido = parseFloat(
      prompt(`Você tem mais duas tentativas:
  Escolha um numero:`)
    );
    if (numero !== numeroEscolhido) {
      numeroEscolhido = parseFloat(
        prompt(`Você tem mais uma tentativa:
  Escolha um numero:`)
      );
      if (numero === numeroEscolhido) {
        alert(`Voce acertou e o numero é ${numero}`);
      } else {
        alert(`Infelizmente voce errou, o numero escolhido foi ${numero}`);
        numeroEscolhido = numero;
      }
    } else {
      alert(`Você acertou o numero, parabens!!!`);
      numeroEscolhido = numero;
    }
  }
}
