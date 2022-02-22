// Função que receba um peso de um peixe, e calcule o excesso de peso (permitido até 60kg) e calcule a multa (R$6,00 por kg).

function pesoPeixe(peso) {

    if (peso <= 60)
        return "Peso permitido"
    else
        var excesso = peso - 60
        var multa = excesso * 6
        console.log("Excesso de Peso em", excesso, "Kg", "Multa de:", multa, "reais")      
}

console.log(pesoPeixe(65))