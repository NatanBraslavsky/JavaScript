let rand = Math.floor(Math.random() * 11)
let num = document.getElementById('inum')
var tentativas = 0

function verificar(){
    if(num.value < 0 || num.value > 10 || num.value == ''){
        document.getElementById('res').innerHTML = 'Entre com um valor válido.'
    } else{
        tentativas++
        if(num.value == rand){
            document.getElementById('res').innerHTML = `Você acertou em ${tentativas} tentativas <br>O número era: ${rand}`
            rand = Math.floor(Math.random() * 11)
            tentativas = 0
        } else{
            document.getElementById('res').innerHTML = `Você errou, tente novamente.<br> Tentativa: ${tentativas}<br>`
        }
    }
    num.value = ''
    num.focus()
}