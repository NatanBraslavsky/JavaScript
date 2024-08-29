//trunc() - parte inteira do numero ------------------------------

/*var a = Number(prompt('Digite um numero decimal'))

b = Math.trunc(a)
document.write(`A parte inteira do numero ${a} = ${b}`)
document.write(`A parte inteira do numero ${a} = ${Math.trunc(a)}`)

//max() - busca o maior valor da lista ----------------------------

c = [4,5,8,9,0,88,-10,25]
d = Math.max(...c)

document.write(`<br>O  maior valor da lista é ${d}`)

//min() - busca o menor valor da lista -----------------------------

e = Math.min(...c)
document.write(`<br>O  menor valor da lista é ${e}`)

//if/else/else if ---------------------------------------------------

idade = prompt('Digite a sua idade')

	if(idade >= 18){
		document.write(`<br>A pessoa tem ${idade} anos,é maior de idade`)
	}else{
		document.write(`<br>A pessoa tem ${idade} anos,é menor de idade`)
	}
	
//---------------------------------------------------------------------

nota = prompt('Digite a nota do aluno')
	if(nota >= 9){
		document.write(`<br>Parabéns!A nota foi ${nota}, conceito A!`)
	}else if(nota >= 8){
		document.write(`<br>Bom trabalho!A nota foi ${nota}, conceito B!`)
	}else if(nota >= 7){
		document.write(`<br>A nota foi ${nota}, conceito C!`)
	}else if(nota >= 6){
		document.write(`<br>Cuidado!A nota foi ${nota}, conceito D!`)
	}else{
		document.write(`<br>Reprovado :(!A nota foi ${nota}, conceito E!Volte no próximo periodo!`)
	}
		
//---------------------------------------------------------------------		

num = prompt('Digite um numero')

	if(num > 0){
		document.write(`<br>O numero ${num} é positivo`)
	}else if(num < 0){
		document.write(`<br>O numero ${num} é negativo`)
	}else{
		document.write(`<br>O numero ${num} é zero`)
	}
//--------------------------------------------------------------------

idade = prompt('Digite a sua idade')

	if(idade < 12){
		document.write(`<br>A idade ${idade} ,você tem desconto infantil`)
	}else if(idade >= 60){
		document.write(`<br>A idade ${idade} ,você tem desconto idoso`)
	}else{
		document.write(`<br>A idade ${idade} ,você não tem desconto`)
	}

//--------------------------------------------------------------------

num1 = prompt('Digite um numero')

	if(num1 % 2 == 0){
		document.write(`<br>O numero ${num1} é par`)
	}else{
		document.write(`<br>O numero ${num1} é impar`)
	}
//-------------------------------------------------------------------*/
ds = prompt('Digite o dia da semana')
	if(ds == 'sabado' || ds == 'domingo'){
		document.write(`<br>Bom final de semana!`)
	}else if(ds == 'segunda-feira'){
		document.write(`<br>Boa semana!`)
	}else if(ds =='sexta-feira'){
		document.write(`<br>Sextooooo!`)
	}else{
		document.write(`<br>É um dia de semana normal!Vá a luta!Coragem!`)
	}