//operadores de atribuição --------------------------------------------

/* forma normal                    /operador de atribuição

a = a + 10                         a += 10
a = a - 20                         a -= 20
a = a * 10                         a *= 10
a = a / 2                          a /= 2
a = a % 2                          a %= 2    

var a = Number(prompt('Digite um numero'))
a += 5       // a = a + 5

alert('A soma dos valores = ' + a)
document.write('A soma dos valores = ' + a)
console.log('A soma dos valores = ' + a)
//--------------------------------------------------------

var b = Number(prompt('Digite um numero'))
b -= a      // b = b - a

alert('A subtração dos valores = ' + b)
document.write('<br>A subtração dos valores = ' + b)
console.log('A subtração dos valores = ' + b)

//Template de string ${} ----------------------------------------

alert(`A soma dos valores = ${a}`)
document.write(`<br>A soma dos valores = ${a}`)
console.log(`A soma dos valores = ${a}`)

//---------------------------------------------------------------

a *= b     // a = a * b

alert(`A multiplicação dos valores = ${a}`)
document.write(`<br>A multiplicação dos valores = ${a}`)
console.log(`A multiplicação dos valores = ${a}`)

//---------------------------------------------------------------
var a1 = Number(prompt('Digite um numero'))
var b1 = Number(prompt('Digite um numero'))

alert(`A soma de ${a1} + ${b1} = ${a1 + b1}`)
document.write(`<br>A soma de ${a1} + ${b1} = ${a1 + b1}`)
console.log(`A soma de ${a1} + ${b1} = ${a1 + b1}`)

//incremento ++ e decremento --  ----------------------------------

num1 = 20
document.write(num1++)//pos-incremento(incrementa mas não mostra o valor incrementado)
document.write('<br>'+ num1)

document.write('<br>'+ ++num1)//pre-incrementa(incrementa e mostra o valor já incrementado)

document.write(`<br>O valor incrementado ${num1} = ${++num1}`)

num2 = 10
document.write('<br>'+ num2--)//pos-decremento
document.write('<br>'+ num2)

document.write('<br>'+ --num2)//pre-decremento
document.write(`<br>O valor ${num2} decrementado = ${--num2}`)*/

// Operadores de comparação ==, === -------------------------------------

// var x = 10
// var y = '10'

// document.write(`<br>O valor ${x} é igual ${y}? ${x == y}`)
// document.write(`<br>O valor ${x} é igual identico ${y}? ${x === y}`)

/* == (igual) - verifica somente se os dados são iguais
   === (igual identico) - verifica se os dados e os tipos são iguais 

var x1 = +(prompt('Digite um numero'))   
var y1 = prompt('Digite um numero') 

document.write(`<br>O valor ${x1} é igual ${y1}? ${x1 == y1}`)
document.write(`<br>O valor ${x1} é igual identico ${y1}? ${x1 === y1}`)

//Operador diferente !=, !== ------------------------------------------

var x2 = 10
var y2 = '10'

document.write(`<br>O valor ${x2} é diferente ${y2}? ${x2 != y2}`)
document.write(`<br>O valor ${x2} possui identidade diferente ${y2}? ${x2 !== y2}`)

//operadores relacionais >,<,>=,<= ------------------------------------

var n1 = +(prompt('Digite um numero'))   
var n2 = parseFloat(prompt('Digite um numero'))
var n3 = n1 > n2

document.write(`<br>O valor de ${n1} > ${n2}? ${n3}`)

//document.write(`<br>O valor de ${n1} > ${n2}? ${n1 > n2}`)sem criar variavel
document.write(`<br>O valor de ${n1} >= ${n2}? ${n1 >= n2}`)
document.write(`<br>O valor de ${n1} < ${n2}? ${n1 < n2}`)
document.write(`<br>O valor de ${n1} <= ${n2}? ${n1 <= n2}`)

//operadores lógicos - &&(e), ||(ou), !(negação) ----------------------

console.log(20 < 40 && 30 > 5)
console.log(20 < 40 && 30 < 5)
console.log(20 < 40 || 30 < 5)
console.log(2 < 3)
console.log(!(2 < 3))
console.log(!!(2 < 3))

//Biblioteca Math ------------------------------------------------------
//pow() - calcular a potência ------------------------------------------

x = 10
y = 2

p = Math.pow(x,y)
document.write(`<br>O numero ${x} elevado ${y} = ${p}`)
document.write(`<br>O numero ${x} elevado ${y} = ${Math.pow(x,y)}`)//sem criar variavel

x3 = +(prompt('Digite um numero'))
y3 = +(prompt('Digite o valor da potência!'))

document.write(`<br>O numero ${x3} elevado ${y3} = ${Math.pow(x3,y3)}`)

//sqrt() - raiz quadrada ----------------------------------------------

x3 = +(prompt('Digite um numero'))
r = Math.sqrt(x3)

document.write(`<br>A raiz quadrada de ${x3} = ${r.toFixed(2)}`)
document.write(`<br>A raiz quadrada de ${x3} = ${Math.sqrt(x3).toFixed(1)}`)//sem criação da variavel

//.toFixed() - define a quantidade de casas decimais, dentro do 
//           parenteses é definido a quantidade de casas decimais

//cbrt() - raiz cubica --------------------------------------------------

x3 = +(prompt('Digite um numero'))
c = Math.cbrt(x3)

document.write(`<br>A raiz cubica de ${x3} = ${c.toFixed(1)}`)
document.write(`<br>A raiz cubica de ${x3} = ${Math.cbrt(x3).toFixed(1)}`)

//round() - arredonda matematicamente ----------------------------------

x3 = +(prompt('Digite um numero'))

document.write(`<br>O valor de ${x3} arredondado = ${Math.round(x3)}`)

//ceil() - arredonda obrigariamente para cima --------------------------

document.write(`<br>O valor de ${x3} arredondado = ${Math.ceil(x3)}`)

//floor() - arredonda obrigatoriamente para baixo -----------------------

document.write(`<br>O valor de ${x3} arredondado = ${Math.floor(x3)}`)*/

//!random() - gerar numeros aleatórios entre 0 e 1(não incluso) ----------------------


// document.write(`<br>O numero aleatório é ${Math.random()}`)
// document.write(`<br>O numero aleatório é ${Math.random().toFixed(1)}`)
// document.write(`<br>O numero aleatório é ${(Math.random()* 50) + 1}`)
// x = (Math.random().toFixed(1)*50)
// document.write(`<br>Numero aleatorio: ${x}`)


// function aleatorio(min, max){
//    return Math.floor(Math.random() * (max - min + 1)) + min
// }

// var maximo = +(prompt("Digite um número máximo"))
// var minimo = +(prompt("Digite um número mínimo"))
// var numero = aleatorio(minimo, maximo)
// document.write(`Número aleatório gerado entre ${minimo} e ${maximo}: ${numero}`)

