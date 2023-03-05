const nome = prompt(`Qual o seu nome?`);
const idade = prompt(`Quantos anos você tem?`);
const linguagem = prompt(`Qual linguagem de programação você está
estudando?`);

alert(`Olá ${nome}, você tem ${idade} anos e já está
aprendendo ${linguagem}!`);

const opcao = prompt(`Você gosta de estudar ${linguagem}? 
Responda como número 1 para SIM e 2 para NÃO.`);

if (opcao === "1") {
  alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
} else if (opcao === "2") {
  alert(`Ahh que pena... Já tentou aprender outras
  linguagens?`);
} else {
  alert(`Você escreveu opcao errada`);
}
