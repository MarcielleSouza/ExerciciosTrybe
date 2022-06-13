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