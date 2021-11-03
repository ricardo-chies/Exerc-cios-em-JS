// Função em JS que simule media de um aluno e o aprove caso média seja superior a 6

function calcularMediaFinal(n1, n2, n3, n4) 
{
    var resultado = (n1 + n2 + n3 + n4) / 4
    console.log("A média final é: " + resultado)
    return resultado
}

function validarSituacaoAluno(notaFinal)
{
    if(notaFinal >= 6) 
    {
        return true
    } else 
    {
        return false
    }
}

function imprimirSituacaoAluno(isAprovado) {
    if (isAprovado) 
    {
        console.log("Aluno Aprovado")
    } else 
    {
        console.log("Aluno Reprovado")
    }
}

var mediaA = calcularMediaFinal(8, 9, 10, 7)
var mediaB = calcularMediaFinal(4, 5, 7, 7)

var resultadoAlunoA = validarSituacaoAluno(mediaA)
var resultadoAlunoB = validarSituacaoAluno(mediaB)

imprimirSituacaoAluno(resultadoAlunoA)
imprimirSituacaoAluno(resultadoAlunoB)