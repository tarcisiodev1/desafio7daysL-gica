let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let while1 = false;

while (while1 !== true) {
  let comida1 = "";
  let tipo1 = "";
  let carrinho = confirm(
    "Você deseja adicionar uma comida na sua lista de compras?"
  );
  if (carrinho === true) {
    comida1 = prompt(`Qual comida?`);
    tipo1 = prompt(`Qual tipo de comida escolha umas das opcoes 
        1- frutas
        2- laticionios
        3- congelados
        4- doces`);
    switch (tipo1) {
      case "1":
        frutas.push(comida1);
        break;
      case "2":
        laticinios.push(comida1);
        break;
      case "3":
        congelados.push(comida1);
        break;
      case "4":
        doces.push(comida1);
        break;
      default:
        alert("Erro!");
    }
  } else {
    alert(`Carrinho:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
    while1 = true;
  }
}
