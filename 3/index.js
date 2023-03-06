const area = prompt(
  "qual are voce quer seguir \n escolha 1 para back end e 2 para front end:"
);
const tech = [];
let areaFb = "";
let menu = true;
if (area === "1") {
  areaFb = prompt("Escolha:\n 1- c# \n 2- java");
} else if (opcao === "2") {
  areaFb = prompt("Escolha:\n 1- React \n 2- Vue");
}

const seguir = prompt(
  "Escolha \n 1-seguir se especializando na área escolhida \n 2- seguir se desenvolvendo para se tornar Fullstack."
);

if (seguir === "1") {
  alert("Parabêns pela escolha, a área escolhida é muito boa");
} else if (seguir === "2") {
  alert(
    "Parabêns pela escolha, especializando em Fullstack vai abrir muitas 'portas' no mercado de TI"
  );
} else {
  alert("escolheu  uma opcao errada!");
}

while (menu !== false) {
  menu = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");

  console.log(menu);
  if (menu === true) {
    tech.push(prompt("Qual tecnologia você quer se especializar:"));
    alert("Suas stack de especialização:\n" + tech + "");
  } else {
    alert("OK, parabens pela jornada até mais...");
  }
}
