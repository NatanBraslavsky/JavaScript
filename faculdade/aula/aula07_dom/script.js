/*
!Função every() - verifica se todods os elementos atendem as condições
nome = ['Thereza','Eva','Flora','Liz']
function n(elem){
	return (typeof elem == 'string')
}
console.log(`<br>Todos os elementos são do tipo string? ${nome.every(n)}`)
*/
//--------------------------------------------------

var numeros = [2,4,6,8,10]
pares = numeros.every(function(numero){
	return numero %  2 == 0
})
console.log(pares)
/*

//----------------------------------------------------------
m = numeros.every(function(n){
	return n > 5
})
document.write(`<br>Todos os numeros são maiores que 5? ${m}`)

//!Função some() - verifica se pelo menos 1 elemento atende a condição

var numeros1 = [1,3,5,7,9,8]
pares1 = numeros1.some(function(num){
	return num %  2 == 0
})
document.write(`<br>Todos os numeros são pares? ${pares1}`)

//!Função filter() - filtrar o array --------------------------------

frutas = ['banana','abacaxi','uva','laranja','manga','morango']
function f(elem){
	return (elem.indexOf('an') > 0)
}
document.write(`<br>${frutas.filter(f)}`)

//----------------------------------------------------------------

numeros = [1,2,3,4,5,6,7,8,9,10]
impar = numeros.filter(function(n){
	return n % 2 != 0
})
document.write(`<br>Os numeros impares são: ${impar}`)

//!Função map() - cria um novo vetor com os resultados da função aplicada

var numeros2 = [1,2,3,4,5]

dobro = numeros2.map(function(n1){
	return n1 * 2
})
document.write(`<br>O novo vetor é ${dobro}`)

//!Função reduce() - soma todos os elementos do array -------------

numeros3 = [10,20,30,40,50]
soma = 0
soma = numeros3.reduce(function(t,n){
	return t + n
})
document.write(`<br>A soma de todos os elemntos do vetor é ${soma}`)

/*--------------------Matéria da AV1 -------------------------

var corpo = document.body
corpo.style.background='rgb(67,120,190)'

//Exemplo de seletor getElementsByTagName()--------------------

var a = document.getElementsByTagName('p')[1]
a.style.color = 'red'
a.style.fontSize = '16pt'
a.style.background = 'yellow'
a.style.fontFamily = 'Verdana'

//Exemplo de seletor getElementById() --------------------------

var b = document.getElementById('a')
b.style.color = 'red'
b.style.fontSize = '16pt'
b.style.background = 'yellow'
b.style.fontFamily = 'Verdana'
b.innerHTML = 'Alterando a palavra teste para <strong>Dom</strong>'

/*innerText/textContent - traz somente o texto
innerHTML - traz o texto e a sua formatação */

