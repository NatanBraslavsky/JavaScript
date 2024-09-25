/* alert('Bom dia!\nSejam Bem-Vindos!\n' + Date())
         document.write('Bom dia!<br>Sejam Bem-Vindos!<br>',Date())
         console.log('Bom dia!\nSejam Bem-Vindos!\n',Date())
/*para concatenar podemos usa o sinal de + ou a virgula,
sendo que no alert só funciona o sinal de + 
		document.write('O resultado é : ' + 12 + 45) 
		document.write('<br>O resultado é : ' , 12,45)
		document.write('<br>O resultado é : ' + (5 + 4))

//Constante ---------------------------------------------

	const nome = 'Thereza Gondim'
	const idade = 15
	
	document.write('O nome da pessoa é ' + nome + ' ela tem ' + idade + ' anos.')

//outra maneira de declarar Constante
		
	const email='prof.thereza.gondim@soulasalloe.com.br', cidade='Niteroi'	

	document.write('<br>O email é ',email,'e a cidade é ',cidade)

//Variavel ------------------------------------------------------

	var nome = prompt('Digite o seu nome')
	var idade = prompt('Digite a sua idade')
	
	document.write('O nome é ',nome,'a idade é ', idade)
	
//Operadores aritméticos +,-,*,/,% ---------------------------------

	valor1 = parseInt(prompt('Digite o valor 1'))
	valor2 = parseFloat(prompt('Digite o valor 2'))
	valor3 = Number(prompt('Digite o valor 3'))
	valor4 = +(prompt('Digite o valor 4'))
	
	soma = valor1 + valor2 + valor3 + valor4
	
	document.write('<br>A soma é = ' + soma)
	
	/* parseInt
	parseFloat
	Number
	+ */

//outra forma de fazer a mesma coisa

valor1 = prompt('Digite o valor 1')
valor2 = prompt('Digite o valor 2')
valor3 = prompt('Digite o valor 3')
valor4 = prompt('Digite o valor 4')

valor1 = parseInt(valor1)
valor2 = parseFloat(valor2)
valor3 = Number(valor3)
valor4 = +(valor4)

soma = valor1 + valor2 + valor3 + valor4

document.write('<br>A soma é = ' + soma)

//exemplo de subtração --------------------------------

document.write('<br>A subtração é = ' + (valor1 - valor4))

//exemplo de multiplicação -------------------------------------

document.write('<br>A multiplicação é = ', valor1 * valor3)
   
   
//operação matematica -----------------------------------

    document.write('<br>o resultado da operação e = ',valor1 *(valor2+valor3)/valor4)