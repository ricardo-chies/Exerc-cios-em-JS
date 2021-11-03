// Função em JS que calcule o salário liquido a partir do salário Bruto
// Até 900(Isento); até 1500(-5%); até 2500(-10%); +2500(-20%)

function calculaSalarioLiquido(salarioBruto) {
    if (salarioBruto <= 900) {
        return SalarioBruto
    } else if (salarioBruto <= 1500) {
      return salarioBruto * 0.95
    } else if (salarioBruto <= 2500) {
        return salarioBruto * 0.9
    } else { (salarioBruto >= 2500)
        return salarioBruto * 0.8
    }
}

console.log("O salário líquido é:", calculaSalarioLiquido(4000))