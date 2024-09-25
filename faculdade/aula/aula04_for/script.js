/*For - exemplo de incremento ----------------------------------------

for(var i=0;i<=10;i++){
	document.write(`<br> ${i}`)
}
//ou

for(i=0;i<=10;i++){
	document.write(`<br> ${i}`)
}
//exemplo de decremento--------------------------------------------

for(i=10;i>=0;i--){
	document.write(`<br> ${i}`)
}

//exemplo de incremento +2 -------------------------------------------

for(i=0;i<=20;i +=2){
	document.write(`<br> ${i}`)
}

//iteração sobre um array ------------------------------------------

nome = ['Maria','Paulo','Julia','Lucas']

for(i=0;i < nome.length;i++){
	document.write(`<br> ${nome[i]}`)
}

//exemplo tabuada -----------------------------------------------

t = Number(prompt('Digite um numero para calcular a tabuada'))

for(i=0;i<=10;i++){
	document.write(`<br>${t} x ${i} = ${t * i}`)
}

//Loop aninhado para gerar uma tabela multiplicação ----------------

for(i=0;i<=5;i++){
	for(j=0;j<=5;j++){
		document.write(`<br>${i} x ${j} = ${i * j}`)
	}
}

//Calcular a soma dos numeros de 1 a 10 -------------------
soma = 0
for(i=0;i<=10;i++){
	soma += i // soma = soma + i
}
document.write(`<br>A soma total é ${soma}`)

//mostrar os numeros pares entre 0 e 20 ------------------

for(i=0;i <= 20;i++){
	if(i % 2 == 0){
		document.write(`<br>${i}`)
	}
}

//Inverter uma string ------------------------------------

var palavra = prompt('Digite uma palavra')
palavrainvertida = ''

for(i = palavra.length - 1; i >=0; i--){
	palavrainvertida += palavra[i]
}
document.write(`<br>Palavra original: ${palavra}, Palavra invertida: ${palavrainvertida}`)

//converter todas as letras para maiusculo ou minusculo --------

// .toUpperCase() - converte para maiusculo
// .toLowerCase() - converte para minusculo

nomes = ['Maria','Paulo','Julia','Lucas']

for(i=0; i< nomes.length;i++){
	//nomes[i] = nomes[i].toUpperCase()
	nomes[i] = nomes[i].toLowerCase()
}
document.write(`<br>${nomes}`)

//break -------------------------------------------

for(i=0;i<=10;i++){
	document.write(`<br>${i}`)
	if( i >= 5){
		break
	}
}

//continue -------------------------------------------

for(i=0;i<=10;i++){
	if(i == 5){
		continue
	}
	document.write(`<br>${i}`)
}

//Operador ternário - (condição) ? true : false ----------

idade = +(prompt('Digite a sua idade'))
var res = (idade >= 18)? 'Maior de idade' : 'Menor de idade'
document.write(`<br>${res}`)

var num = +(prompt('Digite um numero'))
var res1 = (num % 2 == 0) ? 'Par' : 'Impar'
document.write(`<br>${res1}`)

//----------------------------------------------------------

var nota = +(prompt('Digite a nota do aluno'))
var conceito = (nota >= 9) ?'A' :
			   (nota >= 8) ? 'B' :
			   (nota >= 7) ? 'C' :
			   (nota >= 6) ? 'D' :'E'
document.write(`<br>${conceito}`)
			  
//Hipotermia, Normal , Febre, Febre alta -------------------

var temp = +(prompt('Digite a temperatura da pessoa'))
var saude = (temp < 35) ? 'Hipotermia' :
			(temp >= 35 && temp < 37.5) ? 'Normal' :
			(temp >= 37.5 && temp < 39) ? 'Febre' :'Febre Alta'
document.write(`<br>${saude}`)

//switch() -------------------------------------------------

sexo = prompt('Digite F(feminino),M(masculino) e O (outros)')
sexo = sexo.toLowerCase()

switch(sexo){
	case 'm':
		document.write('Masculino')
		break
	case 'f':
		document.write('Feminino')
		break
	case 'o':
		document.write('Outros')
		break
	default:
		document.write('Opção invalida')
}

//Mamifero,Ave,reptil ---------------------------------------

animal = prompt('Digite  um animal')
animal = animal.toLowerCase()
var classificacao
switch(animal){
	case 'cachorro':
	case 'gato':
	case 'baleia':
		classificacao='Mamifero'
		break
	case 'pato':
	case 'aguia':
	case 'pinguim':
		classificacao='Ave'
		break
	case 'cobra':
	case 'tartaruga':
	case 'jacare':
		classificacao='Reptil'
		break
	default:
		document.write('Animal desconhecido')
}
document.write(`<br>${classificacao}`)*/

var temp = +(prompt('Digite a temperatura '))
var status

switch(true){
	case(temp < 15):
		status = 'Frio'
		break
	case(temp >= 15 && temp < 25):
		status = 'Agradavel'
		break
	case(temp >= 25):
		status = 'Quente'
		break
	default:
		status = 'Temperatura invalida'
}
document.write(`<br>${status}`)