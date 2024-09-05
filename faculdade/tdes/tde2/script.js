//Número 1

// var nota1 = +(prompt('Digite sua primeira nota: '))
// var nota2 = +(prompt('Digite sua segunda nota: '))
// var media = (nota1 + nota2) / 2
// if(media >= 7){
//     document.write('Aprovado.')
// } else if(media >= 5){
//     document.write('Recuperação')
// } else{
//     document.write('Reprovado.')
// }



//Número 2

// var ano = +(prompt('Digite o ano: '))
// if(ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)){
//     document.write('É bissexto')
// } else{
//     document.write('Não é bissexto')
// }



//Número 3

// var saldo = +(prompt('Digite seu saldo: '))
// var saque = +(prompt('Digite o saque: '))
// if(saldo < saque){
//     document.write('Saldo insufisiente.')
// } else{
//     document.write('Saque concluido. <br>')
//     document.write(`Você sacou ${saque} e ficou com o saldo de ${saldo-saque}`)
// }




//Número 4 peso / altura**2

// var altura = +(prompt('Digite sua altura: '))
// var peso = +(prompt('Digite seu peso: '))
// var imc = peso / (altura ** 2)
// if(imc < 18.5){
//     document.write('Abaixo do peso.')
// } else if(imc < 24.9){
//     document.write('Peso normal.')
// } else if(imc < 29.9){
//     document.write('Sobrepeso.')
// } else {
//     document.write('Obesidade.')
// }




//Número 5

// var compra = +(prompt('Valor compra: '))
// var codigo = +(prompt('Código de desconto: '))
// if(codigo >= 0 && codigo <= 100){
//     var porcent = compra * codigo / 100
//     document.write(`Desconto aplicado de ${codigo}%. Valor final de R$${compra - porcent}`)
// } else {
//     document.write('Desconto não aplicado, valor final igual ao valor inicial.')
// }




//Número 6

// var qtdHoras = +(prompt('Digite suas horas trabalhadas'))
// var valorHoras = +(prompt('Digite o valor das horas: '))
// if(qtdHoras > 40 ){
//     var valorMais = valorHoras * 1.5 * qtdHoras
//     document.write(`Você recebera ${valorMais}`)
// } else{
//     document.write(`Você recebera ${qtdHoras * valorHoras}`)
// }




//Número 7

// var n1 = +prompt('Digite um número: ')
// var n2 = +prompt('Digite um número: ')
// var n3 = +prompt('Digite um número: ')
// var lista = [n1, n2, n3]
// var maior = Math.max(...lista)
// document.write(`O maior é o ${maior}`)





//Número 8

// var nome = prompt('Digite seu nome: ')
// var senha = +(prompt('Digite sua senha: '))
// if(nome == 'admin' && senha == 1234){
//     document.write('Login bem-sucedido.')
// } else {
//     document.write('Usuário ou senha incorretos.')
// }




//Número 9

var distancia = +(prompt('Digite a distância em km: '))
var transporte = prompt('Digite o transporte que deseja: ')
if(transporte == 'carro'){
    document.write(`Você chegara em ${(distancia / 80).toFixed(2)} horas`)
} else if(transporte == 'ônibus'){
    document.write(`Você chegara em ${(distancia / 60).toFixed(2)} horas. `)
} else if(transporte == 'avião'){
    document.write(`Você chegará em ${(distancia / 800).toFixed(2)} horas.`)
} else{
    document.write('Digite um transporte existente. ')
}