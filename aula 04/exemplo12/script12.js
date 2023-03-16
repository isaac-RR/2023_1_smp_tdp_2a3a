function colaetarDados(){
     let peso = Number(document.getElementById("peso").value)
     let altura = Number(document.getElementById("altura").value)
     calcularIMC(peso, altura)
}

function calcularIMC(argpeso, argaltura){
    let imc = argpeso / (argaltura * argaltura)
    document.getElementById("res").innerHTML = imc
    classificarIMC(imc)

    function classificarIMC(argimc){
     var classificacao=""

    if (argimc < 18.5){
         classificacao = "desnutrição"
    }
    else if (argimc < 25 ){
         classificacao = "peso normal"
    }
    else if (argimc < 30 ){
         classificacao = "obsidade I"
    }
    else if (argimc < 40 ){
         classificacao = "obsidade II"
    }
    else {
        classificacao = "obsidade III"
    }
    document.getElementById("status").innerHTML = classificacao
    }






    /*
    console.log("peso:" + peso)
    console.log("Altua:" + altura)
    console.log("imc:" + imc)
    */
}