let opcao = "";

const calculadora = {
  soma: (a, b) => a + b,
  subtração: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => a / b,
};

console.log(calculadora.soma(2, 2));

while (opcao !== "5") {
  opcao = prompt(`Calculadora:
    Qual operação você quer realizar entre A e B ou sair da calculadora:
    1- soma
    2- subtração
    3- Multiplicão
    4- Divisão
    5- Sair`);
  let a = "";
  let b = "";

  switch (opcao) {
    case "1":
      a = prompt(`Calculadora:
    Escreva o número A:`);
      b = prompt(`Calculadora:
    Escreva o número B:`);

      alert(`Resultado: ${calculadora.soma(a, b)}`);
      break;
    case "2":
      a = prompt(`Calculadora:
    Escreva o número A:`);
      b = prompt(`Calculadora:
    Escreva o número B:`);
      alert(`Resultado: ${calculadora.subtração(a, b)}`);
      break;
    case "3":
      a = prompt(`Calculadora:
    Escreva o número A:`);
      b = prompt(`Calculadora:
    Escreva o número B:`);

      alert(`Resultado: ${calculadora.multiplicacao(a, b)}`);
      break;
    case "4":
      a = prompt(`Calculadora:
    Escreva o número A:`);
      b = prompt(`Calculadora:
    Escreva o número B:`);
      alert(`Resultado: ${calculadora.divisao(a, b)}`);
      break;
    case "5":
      alert("Até a próxima");
      break;
    default:
      alert("ERRO!");
      break;
  }
}
