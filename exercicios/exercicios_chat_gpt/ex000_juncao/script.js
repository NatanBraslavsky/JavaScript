// Função de Saudação:
// Escreva uma função chamada saudar que receba um nome como argumento e retorne uma saudação com o nome. Por exemplo, ao passar "João", a função deve retornar "Olá, João!".

// var nome = prompt('Digite seu nome: ')
// function saudar() {
//     document.write(`Olá, ${nome}!<br>`)
// }
// saudar()






// Função de Soma:
// Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles.

// var n1 = +(prompt('Digite um número'))
// var n2 = +(prompt('Digite um número'))
// function soma(x, y) {
//     return (x+y)
// }
// document.write(soma(n1, n2))






// Função de Par ou Ímpar:
// Escreva uma função chamada ePar que receba um número como argumento e retorne true se o número for par e false se for ímpar.

// var n = +(prompt('Digite um número. '))
// function epar(x){
//     if(x % 2 == 0) {
//         return 'Par!'
//     } else{
//         return 'Impar!'
//     }
// }
// document.write(epar(n))






// Função de Fatorial:
// Implemente uma função chamada fatorial que receba um número inteiro n e retorne o fatorial de n (n!).

// var n = +(prompt('Digite um número'))
// function fatorial(x) {
//     let fat = 1
//     for(var i = x; i > 0; i--){
//         fat *= i
//     }
//     return fat
// }
// document.write(`O fatorial de ${n} é ${fatorial(n)}`)







// Função de Conversão de Celsius para Fahrenheit:
// Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura em Celsius e retorne a temperatura equivalente em Fahrenheit. A fórmula de conversão é: F = C * 9/5 + 32.

// var grau = +(prompt('Digite um valor em graus'))
// function celsiusFahr(x){
//     let f = x * 9/5 + 32
//     return f
// }

// document.write(`${grau}C convertido para Fahrenheit: ${celsiusFahr(grau)}`)







// Função de Verificação de Palíndromo:
// Escreva uma função chamada ePalindromo que receba uma string e retorne true se a string for um palíndromo (ou seja, se puder ser lida da mesma forma de trás para frente) e false caso contrário.

// var str = prompt('Digite seu nome')
// function palindromo(nome) {
//     let string = nome.toLowerCase();
//     let invert = string.split('').reverse().join('');
//     return string === invert
// }
// document.write(palindromo(str)) 








// Função de Maior Número em um Array:
// Implemente uma função chamada maiorNumero que receba um array de números e retorne o maior número presente no array.

// let vetor = []

// for(let i = 0; i<5; i++){
//     let num = +(prompt(`Digite o ${i+1} número`))
//     vetor.push(num)
// }
// function maior(x){
//     let mai = 0
//     mai = vetor[0]
//     for(let i = 0; i < 5; i++){
//         if(x[i] > mai){
//             mai = x[i]
//         }
//     }
//     return mai
// }
// document.write(`Maior número no vetor: ${maior(vetor)}`)


// var n = +(prompt('Digite um número'))
// function fatorial(x) {
//     let fat = 1
//     for(var i = x; i > 0; i--){
//         fat *= i
//     }
//     return fat
// }
// document.write(`O fatorial de ${n} é ${fatorial(n)}`)

var str = prompt('Digite seu nome')
function palindromo(nome) {
    let string = nome.toLowerCase();
    let invert = string.split('').reverse().join('');
    return string === invert
}
document.write(palindromo(str))