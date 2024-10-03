/*
keydown - ocorre quando uma tecla é pressionada
keyup - ocorre quando uma tecla é liberada
keypress - ocorre quando uma tecla que produz caractere é pressiodada
*/

//!exemplo 1 - Captura das teclas digitadas
// document.getElementById('input1').addEventListener('keydown', press)

// function press(event){
//     console.log('tecla', event.key)
// }

// document.getElementById('input1').addEventListener('keydown', (event) =>{
//     console.log('tecla: ', event.key)
// })

// document.getElementById('input1').addEventListener('keydown', function(event){
//     console.log('tecla: ', event.key)
// })

//!exemplo 2 - Prevenir a ação padrão do botão

// document.querySelector('#input2').addEventListener('keydown', (event) =>{
//     if(event.key == 'Enter'){
//         event.preventDefault()
//         alert('Tecla enter foi pressionada, mas a ação foi previnida.')
//     }
// })

//!exemplo 3 - Previnia a ação de string

// document.querySelector('#input3').addEventListener('keydown',(event) =>{
//     if(isNaN(event.key) && event.key != 'Backspace'){
//         event.preventDefault()
//     } 
// })

//!exemplo 4 - Controle de volume

// var volume = 50
// document.addEventListener('keydown', function(event){
//     if(event.key == 'ArrowUp'){
//         volume = Math.min(100 ,volume + 5)
//     } else if(event.key == 'ArrowDown'){
//         volume = Math.max(0 ,volume - 5)
//     }
//     document.getElementById('volume').textContent = 'Volume: ' + volume
// })

//!exemplo 5 - Alterar a cor de fundo da tela

// function cor(event){
//     var kc = event.which
//     switch(kc){
//         case 82:
//             document.body.style.backgroundColor = 'red'
//             break
//         case 71:
//             document.body.style.backgroundColor = 'green'
//             break
//         case 66:
//             document.body.style.backgroundColor = 'blue'
//             break
//     }
// }
// document.addEventListener('keydown',cor)

//!exemplo 6 - alterar a cor do elemento com a barra de espaço

// var elemento = document.getElementById('elemento')

// function h(event){
//     if(event.key == ' ') {
//         elemento.style.backgroundColor = 'lightgreen'
//     }
// }
// function padrao(event){
//     if(event.key == ' '){
//         elemento.style.backgroundColor = 'lightblue'
//     }
// }
// document.addEventListener('keydown', h)
// document.addEventListener('keyup', padrao)

var i = document.getElementById('input4')
var l = document.getElementById('lista1')

function adicionar(event){
    if(event.key == 'Enter'){
        var novoItem = document.createElement('li')
        novoItem.innerText = i.value
        l.appendChild(novoItem)
        i.value = ''
    } else if(event.key == 'Delete'){
        var ultimoFilho = l.lastChild
        if(ultimoFilho){
            l.removeChild(ultimoFilho)
        }
    }
}
i.addEventListener('keydown' , adicionar)