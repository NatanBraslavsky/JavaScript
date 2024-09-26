// let butao = document.getElementById('btn')


// function clique(){
//     butao.innerHTML = 'Clicou!'
// }

// let a = document.getElementById('a')

// a.addEventListener('mouseover', function(){
//     a.style.background = 'blue'
// })

// a.addEventListener('mouseout', function(){
//     a.style.background = 'orange'
// })

// document.querySelector('#b').addEventListener('click', function(){
//     this.style.background = 'red'
// })


// let cont = 0
// document.getElementById('btn1').addEventListener('click', function(){
//     if(cont % 2 == 0){
//         document.getElementById('img').src = 'download (1).jfif'
//     }else{
//         document.getElementById('img').src = 'download.jfif'
//     }
//     cont++
// })

// var texto = document.getElementById('txt')
// document.getElementById('btn2').addEventListener('click', function(){
//     if(texto.style.display == 'none'){
//         texto.style.display = 'block'
//     } else {
//         texto.style.display = 'none'
//     }
// })

// document.querySelector('#btn3').addEventListener('click', function(){
//     var novo = document.createElement('p') 
//     novo.textContent = 'Novo valor inserido no container'
//     document.querySelector('#container').appendChild(novo)
// })

// function clique(){
//     document.body.style.background = 'red'
// }
// function solta(){
//     document.body.style.background = 'white'
// }

// var btn = document.getElementById('btn5')

// btn.addEventListener('mouseover', function(){
//     this.style.scale = '1.1'
// })

// btn.addEventListener('mouseout', function(){
//     this.style.scale = '1'
// })

function somar(){
    let n1 = +(document.getElementById('num1').value)
    let n2 = +(document.getElementById('num2').value)
    let p = document.getElementById('p')
    let soma = n1 + n2
    p.innerHTML = `Resposta:  ${n1} + ${n2} = ${soma}`
}   