function play(escolhaUsuario){
    const opcoes = ["Rock", "Paper", "Scissors"]
    const escolhaPc = opcoes[Math.floor(Math.random() * 3)]

    let resultado = ''

    if(escolhaUsuario == escolhaPc){
        resultado = 'Empate!'
    } else if(
        (escolhaUsuario === 'Rock' && escolhaPc === 'Scissors') ||
        (escolhaUsuario === 'Paper' && escolhaPc === 'Rock') ||
        (escolhaUsuario === 'Scissors' && escolhaPc === 'Paper')
    ) {
        resultado = 'Você Ganhou!'
    } else{
        resultado = 'Você Perdeu!'
    }

    alert(`Você escolheu ${escolhaUsuario} e o Pc escolheu ${escolhaPc}, logo ${resultado}`)
}

