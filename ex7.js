// Crie uma função em JS que receba um número correspondente a um determinado ano e valide se esse ano é bissexto ou não

function anoBissexto(ano)
{
    if((ano % 400 == 0) || ((ano % 4 == 0) && (ano % 100 != 0)) ) {
        console.log(ano + " é um ano bissexto")
    } else {
        console.log(ano + " não é um ano bissexto")
    }
}

anoBissexto(1984)