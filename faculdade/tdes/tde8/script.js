//!Número 1
var btnResetar = document.getElementById('resetar')
var qtdTecla = 0
document.addEventListener('keydown', function(event){
    if(event.key == 'a' || event.key == 'A'){
        qtdTecla+=1
        document.getElementById('res1').innerHTML = `A tecla 'a' foi digitada ${qtdTecla} vezes`
    }
})
btnResetar.addEventListener('click', function(){
    qtdTecla = 0
    document.getElementById('res1').innerHTML = `A tecla 'a' foi digitada ${qtdTecla} vezes`
})


//!Número 3
document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && (event.key == 's' || event.key == 'S')){
        event.preventDefault()
        alert('Você salvou o arquivo.')
    }
    else if(event.ctrlKey && (event.key == 'p' || event.key == 'P')){
        event.preventDefault()
        alert('Você imprimiu o arquivo.')
    }
})


//!Número 4
let teclas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let res4 = document.getElementById('resq4')
let acertos = 0
let erros = 0
let acertosErrosTxt = document.getElementById('acertosErros')
res4.innerHTML = teclas[0]
document.addEventListener('keydown', (event) =>{
    let aleat = Math.floor(Math.random() * teclas.length)
    if(event.key == res4.innerHTML){
        acertos+=1
    } else{
        erros+=1
    }
    res4.innerHTML = `${teclas[aleat]}`
    acertosErrosTxt.innerHTML = `Acertos: ${acertos}. Erros: ${erros}`
})

