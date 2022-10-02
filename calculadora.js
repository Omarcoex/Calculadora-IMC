function calcularIMC() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  if (altura == "" || peso == "") {
    alert("No hay datos para la altura y el peso");
    document.getElementById("peso").focus();
  } else {
    if (altura >= 35 && altura <= 300) {
      altura = altura / 100;
    }
    if (altura > 0.35 && altura < +3.0) {
      let imc = (peso / altura ** 2).toFixed(1);
      let valor = document.getElementById("valor");
      valor.innerText = imc;
      if (imc <= 18.4) {
        valor.style.backgroundColor = `#1EB6D8`;
      } else if (imc >= 18.5 && imc <= 24.9) {
        valor.style.backgroundColor = `#73D81E`;
      } else if (imc >= 25 && imc <= 29.9) {
        valor.style.backgroundColor = `#F9F921`;
      } else if (imc >= 30 && imc <= 34.9) {
        valor.style.backgroundColor = `#F7CC08`;
      } else {
        valor.style.backgroundColor = `#F73308`;
      }
    } else {
      alert("Hay algun error con el dato de altura");
    }
  }
}

function cancelar() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("valor").innerText = "";
  document.getElementById("valor").style.backgroundColor = "#fff";
}

const calcularI = document.getElementById("calcular");
calcularI.addEventListener("click", calcularIMC);
console.log(valor);

const reini = document.getElementById("Cancelar");
reini.addEventListener("click", cancelar);
