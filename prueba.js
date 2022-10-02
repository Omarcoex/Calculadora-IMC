// // Varirable
// let name = "Omar";
// let lastName = "Alvarez";
// let username = "Oalvarez";
// let age = 26;
// let email = "alvarez@gmail.com";
// let adults = true;
// let saverMoney = 1500;
// let debtMoney = 1000;
// let Total = saverMoney - debtMoney;

// console.log(`Mi nombre completo es ${name} ${lastName} ${username}`);
// console.log(`Total dinero en cuenta Sr ${name} es: ${Total}`);

// //  function
// function saludarPersona(name, username, age, saverMoney, debtMoney, Total) {////parametros para la funcion
//   console.log(
//     `Mi nombre es ${name} Mi apodo es ${username} tengo ${age} tengo ahorrado ${saverMoney} he gastado ${debtMoney} en mi cuenta tengo ${Total}`
//   );
// }
// saludarPersona("Omar", "Sensei", 36, 2000, 500, 1500);//Tiene parametros la function

// const tipoDeSuscripcion = "";

// switch (tipoDeSuscripcion) {
//   case "Free":
//     console.log("Solo puedes tomar los cursos gratis");
//     break;
//   case "Basic":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     break;
//   case "Expert":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     break;
//   case "ExpertPlus":
//     console.log(
//       "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//     );
//     break;
// }

// const tipoDeSuscripcion = prompt("Ingres el tipo DeSuscripcion");

// if (tipoDeSuscripcion === "Free") {
//   console.log("Solo puedes tomar los cursos gratis");
// } else if (tipoDeSuscripcion === "Basic") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoDeSuscripcion === "Expert") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoDeSuscripcion === "ExpertPlus") {
//   console.log(
//     "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//   );
// } else {
//   console.log("No tienes ninguna suscripción");
// }

// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }
// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`"El valor de i es: " ${i}`);
// }

// let b=0
// while ( b < 10) {
//     b++;
//     console.log(`"El valor de b: " ${b}`);
// }
let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  oq: `Cuanto es ${num} + ${num2}`
}

function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();