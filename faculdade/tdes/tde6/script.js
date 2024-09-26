function clique1(){
    let nome1 = document.getElementById('nome1').value
    let resp1 = document.getElementById('res1')
    resp1.innerHTML = `Olá ${nome1}, Seja bem vindo`
}

function clique2(){
    let num1 = +(document.getElementById('num21').value)
    let num2 = +(document.getElementById('num22').value)
    let resp2 = document.getElementById('res2')
    resp2.innerHTML = `${num1} + ${num2} = ${num1 + num2}<br>${num1} * ${num2} = ${num1 * num2}<br>${num1} / ${num2} = ${num1 / num2}<br>${num1} - ${num2} = ${num1 - num2}`
}

document.getElementById('btn3').addEventListener('click', function(){
    let num13 = +(document.getElementById('num31').value)
    let num23 = +(document.getElementById('num32').value)
    let num33 = +(document.getElementById('num33').value)
    let resp3 = document.getElementById('res3')
    let media = (num13 + num23 + num33) / 3
    resp3.innerHTML = `A media é: ${media}`
})

document.getElementById('btn4').addEventListener('click', function(){
    let num14 = +(document.getElementById('num41').value)
    let num24 = +(document.getElementById('num42').value)
    let subtracao = num14 - num24
    let resp4 = document.getElementById('res4')
    resp4.innerHTML = `${num14} - ${num24} = ${num14 - num24}`
})

document.getElementById('btn5').addEventListener('click', function(){
  let num51 = +(document.getElementById('num51').value)  
  let resp5 = document.getElementById('res5')
  resp5.innerHTML = ''
  for(let i = 1; i <= 10; i++){
    resp5.innerHTML += `<br>${num51} * ${i} = ${num51 * i}`
  }
})

