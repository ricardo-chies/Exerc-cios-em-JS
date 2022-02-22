// Crie um código que percorra uma lista de números e imprima qual desses números é o MENOR

var lista = [3, 5, 4, 1, 10, 11, 7]

var contador = 0
var menor = lista[0]

while (contador < lista.length) {
    if (menor > lista[contador])
        menor = lista[contador]
    contador++
}

console.log(menor)