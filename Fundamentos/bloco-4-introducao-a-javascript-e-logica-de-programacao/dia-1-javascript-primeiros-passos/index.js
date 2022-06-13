//PRIMEIRO EXERCICIO DO BLOCO 4

const myName = "Marcielle";
const birthCity = "Belo Horizonte";
let birthYear = "1997";
birthYear = 2030;
birthCity = "Porto Seguro";
//Aparecera um mensagem de erro na linha 5 pois não da para alterar o valor de uma constante.
console.log(myName);
console.log(birthCity);
console.log(birthYear);

//SEGUNDO EXERCICIO DO BLOCO 4

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge)

const base = 5;
let height = 8;
const area = (base * height);
console.log(area);
const perimeter = 40;

//TERCEIRO EXERCICIO DO BLOCO 4

const notaCandidato = 79;

if (notaCandidato >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
}
else if (notaCandidato < 80 && notaCandidato >= 60) {
  console.log('Você está na nossa lista de espera');
}
else {
  console.log('Você foi reprovada(o)');
}

// QUARTO EXERCICIO DO BLOCO 4
// "OPERADOR AND" 

const currentHour = 7;
let message = '';

if (currentHour >= 22) {
  console.log("Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >= 18 && currentHour < 22) {
  console.log("Rango da noite, vamos jantar :D");
}
else if (currentHour >= 14 && currentHour < 18) {
  console.log("Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour > 10 && currentHour < 15) {
  console.log("Hora do almoço!!!");
}
else {
  console.log("Hmmm, cheiro de café recém passado");
}

// "OPERADOR OR"
let weekDay ="Sabado";

if ( weekDay === "Segunda-feira" || weekDay === "Terca-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "Quarta-feira" || weekDay === "Quinta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D"); 
}
else if (weekDay === "Quinta-feira" || weekDay === "Sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D"); 
}
else {
  console.log("FINALMENTE, descanso merecido UwU");
}

// "OPERADOR NOT"
console.log((2 + 2) === 4);

//QUINTO EXERCICIO DO BLOCO 4

let pessoaCandidata = "pontuação baixa";
switch (pessoaCandidata) {
  case "pontuação alta":
    console.log("Aprovada");
    break

  case "pontuação em analise":
    console.log("Lista");
    break

  case "pontuação baixa":
    console.log("Reprovada");
    break

  default:
    console.log("não se aplica");
}