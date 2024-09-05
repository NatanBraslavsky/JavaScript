/*While() - a condição é verificada antes de ser executada -----

var a = 0
while(a <= 10){
	document.write(`<br>${a}`)
	a++
}

//----------------------------------------------------
var b = Number(prompt('Digite um numero até 50'))
while(b <= 50){
	document.write(`<br>Numero:${b}`)
	b += 2 //ou b = b + 2
}
//exemplo decremento ----------------------------------

var c = 10
while(c >= 0){
	document.write(`<br>Numero:${c}`)
	c-- 
}
//------------------------------------------------------
n = 1
par = impar = 0

while(n != 0){
	n = +(prompt('Digite um numero'))
	if(n != 0){
		if(n % 2 == 0){
			par++
		}else{
			impar++
		}
	}
}
document.write(`<br>Você digitou ${par} numeros pares e ${impar} numeros impares`)
//-------------------------------------------------------
n1 = 0
while(n1 < 5){
	n1++
	if(n1 == 3){
	break
	}
document.write(`<br>${n1}`)
}
//--------------------------------------------------------
n1 = 0
while(n1 < 5){
	n1++
	if(n1 == 3){
	continue
	}
document.write(`<br>${n1}`)
}
//--------------------------------------------------------
c = Math.floor(Math.random() * 11)
var acerto = false
var palpite = 0
while(acerto == false){
	j = +(prompt('Qual o seu palpite?'))
	palpite++
	if(j == c){
		acerto = true
	}
}
document.write(`<br>Legal!você acertou em  ${palpite} palpites`)
document.write(`<br>O numero sorteado foi ${c}`)
//---------------------------------------------------
x = 5
while(x < 5){
	document.write(`<br>${x}`)
}
//Do While()- faça/enquanto.O bloco de codigo é executado pelo menos 1 vez 

var x = 10
do{
	document.write(`<br>${x}`)
	x++
}while(x <= 20)
//--------------------------------------------------------
var b = Number(prompt('Digite um numero até 50'))
do{
	document.write(`<br>Numero:${b}`)
	b += 2 //ou b = b + 2
}while(b <= 50)
//------------------------------------------------------	
x = 5
do{
	document.write(`<br>${x}`)
}while(x < 5)
//------------------------------------------------------
var opcao

do{
	console.log('Menu de operações')
	console.log('1. Adição')
	console.log('2. Subtração')
	console.log('3. Multiplicação')
	console.log('4. Divisão')
	console.log('5. Sair')
	
	opcao = parseFloat(prompt('Escolha a operação desejada: '))
	if(opcao >= 1 && opcao <= 4){
		num1 = parseFloat(prompt('Digite o primeiro numero: '))
		num2 = parseFloat(prompt('Digite o segundo numero: '))
		
		var result
	switch(opcao){
		case 1:
			result = num1 + num2
			console.log(`Resultado: ${num1}+ ${num2} = ${result} `)
			break
		case 2:
			result = num1 - num2
			console.log(`Resultado: ${num1}- ${num2} = ${result} `)
			break
		case 3:
			result = num1 * num2
			console.log(`Resultado: ${num1}* ${num2} = ${result} `)
			break
		case 4:
			if(num2 != 0){
				result = num1 / num2
				console.log(`Resultado: ${num1}/${num2} = ${result} `)
			}else{
				console.log(`Erro:Divisão por zero não é permitido`)
			}
			break
			}
		break
	}
		else if(opcao == 5){
			console.log(`Saindo do menu.`)
			break
		}
		else{
			console.log(`Opção invalida.`)
		}	
	}while(true)
				
//Função -------------------------------------------------------

function mensagem(){
		document.write(`Olá!Bom dia!`)
}
mensagem()	

//--------------------------------------------------------------
function mensagem1(){	
		return `Olá!Bom dia!`
}
document.write(`<br> ${mensagem1()}`)
//---------------------------------------------------------------
function mensagem2(nome){
	document.write(`Olá!Bom dia! ${nome}`)
}
nome = prompt('Digite o seu nome')
mensagem2(nome)
//---------------------------------------------------------------
function mensagem3(nome){
	return `Olá!Bom dia! ${nome}`
}
nome = prompt('Digite o seu nome')
document.write(mensagem3(nome))

//---------------------------------------------------------------
function soma(x,y){
	return x + y
}
x = parseFloat(prompt('Digite o valor de x: '))
y = parseFloat(prompt('Digite o valor de y: '))
document.write(`<br>A soma de ${x} + ${y} = ${soma(x,y)} `)
//----------------------------------------------------------------
function soma1(x,y){
	document.write(`<br>A soma de ${x} + ${y} = ${x + y} `)
}
x = parseFloat(prompt('Digite o valor de x: '))
y = parseFloat(prompt('Digite o valor de y: '))
soma1(x,y)
//----------------------------------------------------------------
function media(n1,n2,n3){
	var media = (n1 + n2+ n3)/3
	return media
}
n1 = parseFloat(prompt('Digite o valor de n1: '))
n2 = parseFloat(prompt('Digite o valor de n2: '))
n3 = parseFloat(prompt('Digite o valor de n3: '))
document.write(`<br>A media dos numeros: ${media(n1,n2,n3).toFixed(2)}`)
//----------------------------------------------------------------	
function par(num){
	return num % 2 == 0
}
num = parseFloat(prompt('Digite o valor de num: '))
document.write(`<br>O numero é par? ${par(num)}`)
//----------------------------------------------------------------*/
function fatorial(n){
	if(n == 0 || n == 1){
		return 1
	}
	return n * fatorial(n - 1)
}
n = parseFloat(prompt('Digite o valor de numero: '))
document.write(fatorial(n))
	