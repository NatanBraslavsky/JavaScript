//? dois parametros(função, tempo)
//!executa a função uma vez em 3 segundos
setTimeout(() =>{
    console.log('settimeout')
}, 3000)

//!executa a função repetidamente em um intervalo de tempo
setInterval(() =>{
    console.log('setinterval')
}, 1000)


window.document.querySelectorAll('button')
.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        console.log(btn.style.background='red')
    })
})