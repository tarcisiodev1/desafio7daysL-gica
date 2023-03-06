const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for (let contador = 0; contador < 3; contador++) {
  chute = prompt("Tente adivinhar o número de 0 a 10:");
  if (chute == numeroAdivinhacao) {
    alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
    acertou = true;
    break;
  }
  alert("Errado!");
}
// O comando “break” serve para encerrar a leitura.
// O break é um comando que podemos utilizar quando queremos parar/encerrar o laço de repetição na hora.
//  A instrução break interrompe o laço e continua executando o código após o loop (se houver).
if (!acertou) {
  alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
