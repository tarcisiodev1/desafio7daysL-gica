let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let while1 = false;

while (while1 !== true) {
  let comida1 = "";
  let tipo1 = "";
  let add = "";
  let carrinho = "";
  if (
    frutas.length === 0 &&
    laticinios.length === 0 &&
    congelados.length === 0 &&
    doces.length === 0
  ) {
    carrinho = prompt(
      "Você deseja adicionar uma comida na sua lista de compras?\n 1- Para adicionar\n 3- Para Mostrar o carrinho\n4- sair"
    );
  } else {
    carrinho = prompt(
      "Opções:\n 1- Para adicionar uma comida na sua lista de compras\n 2- Para remover item do carinho de comprar \n3- Mostrar o carrinho\n4- sair"
    );
  }
  //   } else {
  //     alert("ERRO!");
  //   }
  if (carrinho === "1") {
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
  } else if (carrinho === "2") {
    add = prompt(`Carrinho:
  Frutas: ${frutas}
  laticinios: ${laticinios}
  congelados: ${congelados}
  doces: ${doces}
  De qual alimento você quer remover?
  `);
    if (frutas.includes(add)) {
      frutas.splice(frutas.indexOf(add), 1);
      alert(`Carrinho atualizado:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
    } else if (laticinios.includes(add)) {
      laticinios.splice(laticinios.indexOf(add), 1);
      alert(`Carrinho atualizado:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
    } else if (congelados.includes(add)) {
      congelados.splice(congelados.indexOf(add), 1);
      alert(`Carrinho atualizado:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
    } else if (doces.includes(add)) {
      doces.splice(doces.indexOf(add), 1);
      alert(`Carrinho atualizado:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
    }
  } else if (carrinho === "3") {
    alert(`Carrinho atualizado:
    Frutas: ${frutas}
    laticinios: ${laticinios}
    congelados: ${congelados}
    doces: ${doces}`);
  } else {
    alert(`Carrinho atualizado e saindo:
  Frutas: ${frutas}
  laticinios: ${laticinios}
  congelados: ${congelados}
  doces: ${doces}`);
    while1 = true;
  }
}
