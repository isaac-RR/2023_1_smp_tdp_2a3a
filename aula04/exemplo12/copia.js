function calcularIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = peso / (altura * altura)
    document.getElementById("res").innerHTML = imc

    var classificacao=""

    if (imc < 18.5){
         classificacao = "desnutrição"
    }
    else if (imc < 25 ){
         classificacao = "peso normal"
    }
    else if (imc < 30 ){
         classificacao = "obsidade I"
    }
    else if (imc < 40 ){
         classificacao = "obsidade II"
    }
    else {
        classificacao = "obsidade III"
    }
    document,getElementById("status"),innerHTML = classificacao
    }