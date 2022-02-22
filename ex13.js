// Crie uma função que calcule o IMC e classifique a pessoa.

function funcaoResultado(resultado) {
    if (resultado < 18)
        return "Abaixo do peso"
    else if (resultado < 25)
        return "Peso normal"
    else if (resultado < 29)
        return "Sobrepeso"
    else
        return "Obeso"
}

function funcaoCalculo(altura, peso) {
    var resultado = peso / (altura * altura)
    return funcaoResultado(resultado)
}

console.log(funcaoCalculo(1.62, 65))