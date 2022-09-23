function calcularIMC(){
    var formulario = document.getElementById("formulario");  
    
    var kilos = +formulario.peso.value;
    var metros = +formulario.alto.value;    
    
    var altura = (metros * 100)/100;
    var imc = kilos / (altura * altura);
    
    formulario.imc.value = imc.toFixed(2);
  }