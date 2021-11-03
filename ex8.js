// Função que imprima os 100 primeiros números ímpares na tela

function imprime100impares() {
    var num = 1
    var count = 1

    while(count <= 100) {
        console.log(num)
        num = num + 2
        count = count + 1
    }
}

imprime100impares()

function imprime100imparesMaiorMenor() {
    var num = 199
    var count = 100

    while(count > 0) {
        console.log(num)
        num = num - 2
        count = count - 1
    }
}

imprime100imparesMaiorMenor()