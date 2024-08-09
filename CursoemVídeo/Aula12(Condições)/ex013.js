var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda-Feira'
        break
    case 2:
        diaSem = 'Terça-Feira'
        break
    case 3:
        diaSem = 'Quarta-Feira'
        break
    case 4:
        diaSem = 'Quinta-Feira'
        break
    case 5:
        diaSem = 'Sexta-Feira'
        break
    case 6:
        diaSem = 'Sabado'
        break
}
console.log(diaSem)