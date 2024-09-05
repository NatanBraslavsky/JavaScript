var n1 = +(prompt('Sua primeira nota: '))
var n2 = +(prompt('Sua segunda nota: '))
var media = (n1 + n2) / 2
if(media >= 7) {
    alert(`Média: ${media}\nAprovado!`)
} else if(media < 4) {
    alert(`Média: ${media}\nReprovado!`)
} else{
    alert(`Média: ${media}\nRecuperação`)
}