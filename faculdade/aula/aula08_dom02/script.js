/*exemplo 1 -----------------------------

document.getElementById('btn').addEventListener('click',function(){
	document.getElementById('txt').innerText = 'Bom dia!'
})

/*exemplo 2 -----------------------------

var a1 = document.querySelector('#a')
a1.addEventListener('mouseover',function(){
	a1.style.backgroundColor = 'pink'
})

a1.addEventListener('mouseout',function(){
	a1.style.backgroundColor = 'violet'
})

/*exemplo 3 -----------------------------

document.querySelector('#b').addEventListener('click',function(){
	this.style.backgroundColor = 'green'
})

/*exemplo 4 -----------------------------

document.getElementById('btn1').addEventListener('click',function(){
	document.getElementById('img').src ='iafeminina.jfif'
})

/*exemplo 5 -----------------------------

document.getElementById('btn2').addEventListener('click',function(){
var texto = document.getElementById('txt')
texto.style.display = texto.style.display == 'none' ? 'block':'none'
})

/*exemplo 6 -----------------------------

document.querySelector('#btn3').addEventListener('click',function(){
var novo = document.createElement('p')
novo.textContent = 'Novo valor inserido no container'
document.querySelector('#container').appendChild(novo)
})

/*exemplo 7 -----------------------------

document.getElementById('btn4').addEventListener('dblclick',function(){
document.getElementById('dbl').innerHTML = 'Você clicou <strong>duas</strong> vezes!'
})

/*exemplo 8 -----------------------------

var m = document.getElementById('j')

m.addEventListener('mousedown',function(){
	this.innerText = 'Você pressionou o botão do mouse'
	this.style.backgroundColor = '#CECECE'
})

m.addEventListener('mouseup',function(){
	this.innerText = 'Você soltou o botão do mouse'
	this.style.backgroundColor = '#F0AABB'
})

/*exemplo 9 ----------------------------- 

var btn = document.querySelector('#btn5')

btn.addEventListener('mouseover',function(){
	this.style.width ='150px'
	this.style.height='75px'
})

btn.addEventListener('mouseout',function(){
	this.style.width ='100px'
	this.style.height='50px'
})

/*exemplo de soma ----------------------------- */

soma = document.querySelector('#btn6')

/*function somar(){
	a = Number(document.querySelector('#n1').value)
	b = Number(document.querySelector('#n2').value)
	resp.innerText=`A soma dos valores = ${a + b} `
	}
soma.addEventListener('click',somar)

function somar(){
	a = document.querySelector('#n1')
	b = document.querySelector('#n2')
	resp.innerText=`A soma dos valores = ${Number(a.value) + Number(b.value)} `
	}
soma.addEventListener('click',somar)

function somar(){
	a = Number(document.querySelector('#n1').value)
	b = Number(document.querySelector('#n2').value)
	soma1 = a + b
	resp.innerText=`A soma dos valores = ${soma1} `
	}
soma.addEventListener('click',somar)*/

var botao = document.getElementById('btn7')
var nome = document.getElementById('nome')

function responder(){
	resp1.innerText = `Seja Bem-vindo ${nome.value}`
}
botao.addEventListener('click',responder)


// let cont = 0
// document.getElementById('btn1').addEventListener('click', function(){
//     if(cont % 2 == 0){
//         document.getElementById('img').src = 'download (1).jfif'
//     }else{
//         document.getElementById('img').src = 'download.jfif'
//     }
//     cont++
// })

