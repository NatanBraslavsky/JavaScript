/*Eventos do teclado 
keydown - ocorre quando uma tecla é pressionada
keyup - ocorre quando uma tecla é liberada
keypress - ocorre quando uma tecla que produz caractere é pressionada

//!Exemplo 1 - Captura das teclas digitadas --------------------

document.getElementById('input1').addEventListener('keydown',function(event){
	console.log('Tecla pressionada: ',event.key)
})

//!arrow function => -----------------------------------------

document.getElementById('input1').addEventListener('keydown',(event)=>{
	console.log('Tecla pressionada: ',event.key)
})

//!Exemplo 2 - Prevenir a ação padrão do botão ---------------

document.querySelector('#input2').addEventListener('keydown',function(event){
	if(event.key == 'Enter'){
		event.preventDefault() //previnir a quebra de linha
		alert('Tecla enter foi pressionada,mas a ação foi previnida')
	}
	})
//!arrow function --------------------------------------------------------

document.querySelector('#input2').addEventListener('keydown',(event)=>{
	if(event.key == 'Enter'){
		event.preventDefault() //previnir a quebra de linha
		alert('Tecla enter foi pressionada,mas a ação foi previnida')
	}
	})

//!Exemplo 3 - Verificando se as teclas são numericas --------------------

document.querySelector('#input3').addEventListener('keydown',function(event){
	if(isNaN(event.key) && event.key != 'Backspace'){
		event.preventDefault()
	}
})

//!arrow function ------------------------------------------------------

document.querySelector('#input3').addEventListener('keydown',(event)=>{
	if(isNaN(event.key) && event.key != 'Backspace'){
		event.preventDefault()//impedir qualquer caractere que não seja numero
	}
})

//!Exemplo 4 - Controle de volume --------------------------------------

var volume = 50
document.addEventListener('keydown',function(event){
	if(event.key == 'ArrowUp'){
		volume = Math.min(100,volume + 5)
	}else if(event.key == 'ArrowDown'){
		volume = Math.max(0,volume - 5)
	}
	document.getElementById('volume').textContent = 'Volume: '+ volume
})

//!Exemplo 5 - Alterar a cor de fundo da tela --------------------------

function cor(event){
	var kc = event.which //obtem o codigo da tecla pressionada
	switch(kc){
		case 82: //corresponde a tecla r
			document.body.style.backgroundColor = 'red'
			break
		case 71: //corresponde a tecla g
			document.body.style.backgroundColor = 'green'
			break
		case 66: //corresponde a tecla b
			document.body.style.backgroundColor = 'blue'
			break
	}
}
document.addEventListener('keydown',cor)

//!arrow function ------------------------------------------------

document.addEventListener('keydown',(event)=>{
	var kc = event.which //obtem o codigo da tecla pressionada
	switch(kc){
		case 82: //corresponde a tecla r
			document.body.style.backgroundColor = 'red'
			break
		case 71: //corresponde a tecla g
			document.body.style.backgroundColor = 'green'
			break
		case 66: //corresponde a tecla b
			document.body.style.backgroundColor = 'blue'
			break
	}
})

//!Exemplo 6 - alterar a cor do elemento com a barra de espaço ---------

var elemento = document.getElementById('elemento')

function h(event){
	if(event.key == ' '){
		elemento.style.backgroundColor='lightgreen'
	}
}

function hh(event){
	if(event.key == ' '){
		elemento.style.backgroundColor='lightblue'
	}
}

document.addEventListener('keydown',h)
document.addEventListener('keyup',hh)

//!Exemplo 7 - Inserir elementos na lista -------------------------

var i = document.getElementById('input4')
var l = document.getElementById('lista')

function adicionar(event){
	if(event.key == 'Enter'){
		var novoItem = document.createElement('li')
		novoItem.innerText = i.value
		l.appendChild(novoItem)
		i.value = ''
	}
}
i.addEventListener('keydown',adicionar)
//!arrow function -------------------------------------------------*/

var i = document.getElementById('input4')
var l = document.getElementById('lista')

var adicionar = (event)=>{
	if(event.key == 'Enter'){
		var novoItem = document.createElement('li')
		novoItem.innerText = i.value
		l.appendChild(novoItem)
		i.value = ''
	}
}
i.addEventListener('keydown',adicionar)


