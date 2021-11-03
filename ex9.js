// Crie uma função em JS que receba como parâmetro uma lista (array) de salários brutos e retorne uma outra lista (array) com os salários líquidos
// Até 900(Isento); até 1500(-5%); até 2500(-10%); +2500(-20%)

var lista = [1300, 2200, 3500, 4300, 5800]

function calcularSalarioLiquido(salarioBruto) {
    if (salarioBruto <= 900) {
        return salarioBruto
    } else if (salarioBruto <= 1500) {
        return salarioBruto * 0.95
    } else if (salarioBruto <= 2500) {
        return salarioBruto * 0.9
    } else {  (salarioBruto >= 2500)
        return salarioBruto * 0.8
    }
}

function calcularListaLiquida(lista) {
    var contador = 0
    var arrayNovo = []

    while (contador < lista.length) {
        arrayNovo[contador] = calcularSalarioLiquido(lista[contador])
        contador++
    }
    return arrayNovo
}

console.log(calcularListaLiquida(lista))