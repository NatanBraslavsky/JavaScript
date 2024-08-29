// for(let i = 1; i <= 10; i++){
//     document.write(`${i}  `) 
// }

// document.write("<br>")

// for(let i = 10; i > 0; i--){
//     document.write(`${i}  `);
// }

// document.write("<br>")

// for(let i = 0; i <= 20; i+=2){
//     document.write(`${i}  `)
// }

// document.write("<br>")

// var vetor = [1, 2, 3, 4]

// for(let i = vetor.length - 1; i>=0; i--){
//     document.write(`${vetor[i]}`)
// }

// var num = +prompt("Digite um numero")

// document.write("<br>")

// for(let i = 1; i <= 10; i++){
//     document.write(`${i} * ${num} = ${i * num}<br>`)
// }

// for(let i = 0; i <= 5; i++){
//     for(let j = 0; j <= 5; j++){
//         document.write(`<br>${i} * ${j} = ${i * j}`)
//     }
//     document.write("<br>")
// }

// var soma = 0

// for(let i = 1; i <= 10; i++){
//     soma += i
// }

// document.write(soma)


// for(let i = 0; i <= 20; i+=2){
//     document.write(`${i} `)
// }


// var nome = prompt("Digite seu nome")
// var palavraInvertida = ''

// for(let i = nome.length -1;i >= 0; i--){
//     palavraInvertida += nome[i]
// }

// document.write(`${nome} invertido: ${palavraInvertida}`)


var nome = prompt("Digite seu nome")
var maiuscula = nome.toUpperCase()
var minuscula = nome.toLowerCase()
document.write(maiuscula)
document.write('<br>')
document.write(minuscula)

var nome = ['Maria', 'Paulo', 'Julia', 'Lucas']

for(let i = 0; i < nome.length; i++){
    nome[i] = nome[i].toUpperCase()
}
document.write('<br>')
document.write(nome)