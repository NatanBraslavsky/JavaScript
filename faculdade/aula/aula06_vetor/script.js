//Metodo construtor() - new Array() -------------------------
/*
var a = new Array()
document.write(`<br> ${a}`)
document.write(`<br>O tamanho do array é ${a.length}`)

var b = new Array(true,1,2,3,4,new Array(1,2,3),2,'a')
document.write(`<br> ${b}`)
document.write(`<br> ${b[2]}`)
document.write(`<br> ${b[5][1]}`)
document.write(`<br> ${b[5][2]}`)

//!length - verifica o tamanho do array ------------------------

document.write(`<br>O tamanho do array é ${b.length}`)

//!indexOf() - identifica a posição do elemento no array -------

document.write(`<br>A posição do elemento a encontra-se na posição : ${b.indexOf('a')}`)

//!lastIndexOf() - informa a ultima ocorrência do elemento ------

document.write(`<br>A ultima occotência do elemento é: ${b.lastIndexOf(2)}`)

//!Método literal - [] -----------------------------------------

var c = []
document.write(`<br> ${c}`)
document.write(`<br>O tamanho do array é ${c.length}`)

var d = [true,1,2,3,4,[1,2,3],2,'a']
document.write(`<br> ${d}`)
document.write(`<br> ${d[0]}`)
document.write(`<br> ${d[5][0]}`)

//valores externos -------------------------------------------

nota =[]
for(i=0; i<3;i++){
	nota[i] = +(prompt('Digite a nota do aluno'))
}
document.write(`<br> As notas são: ${nota}`)

//string ------------------------------------------------------

nome = 'Thereza'
document.write(`<br>O tamanho do array é ${nome.length}`)
document.write(`<br>A posição do elemento no é array ${nome.lastIndexOf('e')}`)

//inserir novos elementos no array -----------------------------

var e = [1,2,3,4]
e[4] = 'Novo valor'
document.write(`<br>${e}`)

//ou

e[e.length]= 'Valor novo'
document.write(`<br>${e}`)

//---------------------------------------------------------------

pessoa = ['Ana','Liz','Eva','Flora','Isabel']
for(i=0;i<pessoa.length;i++){
	document.write(`<br>Nome: ${pessoa[i]}`)
}
	
//Função de ordenação------------------------------------------------
reverse() - le o array de forma invertida -------------------------

pessoa = ['Ana','Liz','Eva','Flora','Isabel']
document.write(`<br>${pessoa}`)
document.write(`<br>A ordem invertida do array é : ${pessoa.reverse()}`)

//sort()- coloca em ordem alfabetica --------------------------------

document.write(`<br>A ordem alfabetica do array é: ${pessoa.sort().reverse()}`)

//concat() - concatenar vetores -------------------------------------

var f = [1,2,3,5]
var g = [6,7,8]

document.write(`<br>O vetor concatenado é :${f.concat(g)}`)
document.write(`<br>O vetor concatenado é :${g.concat(f)}`)

//includes()- verifica se um determinado elemento encontra-se no array

document.write(`<br>O numero 2 encontra-se no array? ${f.includes(2)}`)
document.write(`<br>O numero 12 encontra-se no array? ${f.includes(12)}`)

//push() - adiciona um novo elemento no final do array ---------------

var h = [10,20,30,40]
h.push(50)

document.write(`<br>O novo array é: ${h}`)

//pop() - remove o ultimo do elemento do array -------------------------

h.pop()

document.write(`<br>O novo array é: ${h}`)

//unshift - adiciona um novo elemento no inicio do array ---------------

h.unshift(0)

document.write(`<br>O novo array é: ${h}`)

//shift() - remove o primeiro do elemento do array -------------------------

h.shift()

document.write(`<br>O novo array é: ${h}`)

//slice() - fatia o array sem alterar o array original ----------------

aluno = 'Maria da Silva Xavier da Cunha'
a = aluno.slice(5)
document.write(`<br>${a}`)
a1 = aluno.slice(5,14)
document.write(`<br>${a1}`)

carro = ['Jeta','Fiat','Focus','Cruze','Corolla','Civic','Elantra']
c = carro.slice(2)
document.write(`<br>${c}`)

c1 = carro.slice(2,3)
document.write(`<br>${c1}`)

c2 = carro.slice(2,5)
document.write(`<br>${c2}`)

c3 = carro.slice(-4,-2)
document.write(`<br>${c3}`)

c4 = carro.slice(-6,-3)
document.write(`<br>${c4}`)

email = 'exemplo@gmail.com'
e = email.slice(email.indexOf('@') + 1)
document.write(`<br>${e}`)

e1 = email.slice(email.lastIndexOf('e') + 1)
document.write(`<br>${e1}`)

e1 = email.slice(email.lastIndexOf('e'))
document.write(`<br>${e1}`)

nome1 = 'Thereza'
n1 = nome1.slice(-3)
document.write(`<br>${n1}`)*/

/*splice() - 1º valor: posição
			 2º valor: quantidade de elementos excluidos
			 3º valor: novos elementos 
			 
d = ['Segunda','Terça','Quarta']
d1 = d.splice(1,1)
document.write(`<br>${d1}`)
document.write(`<br>${d}`)

d2 = d.splice(1,1,'Quinta','Sexta')
document.write(`<br>${d2}`)
document.write(`<br>${d}`)

d3 = d.splice(1,0,'Quinta','Sexta')
document.write(`<br>${d3}`)
document.write(`<br>${d}`)

nome = []
for(i=0;i<5;i++){
	nome[i] = prompt('Digite o seu nome')
}
document.write(`<br>Nome: ${nome}`)
n = nome.splice(2,0,'1')
document.write(`<br>Nome: ${nome}`)*/

//Função anonima - não possui nome, atribui-se a função a uma variavel

var msg = function(){
	return `Olá!Bom dia!`
}
document.write(`<br>${msg()}`)
//---------------------------------------
var msg1 = function(){
	return `Olá ${nome}!Bom dia!`
}
nome = prompt('Digite o seu nome')
document.write(`<br>${msg1()}`)
//---------------------------------------

num = function(numero){
	return numero ** 2
}
numero = +(prompt('Digite um numero'))
document.write(`<br>${num(numero)}`)