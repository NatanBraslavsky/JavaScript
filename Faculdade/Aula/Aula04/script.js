// for(let i = 1; i <= 10; i++){
//     document.write(`${i}  `) 
// }

// document.write("<br>")

// for(let i = 10; i > 0; i--){
//     document.write(`${i}  `);
// }

// document.write("<br>")

// for(let i = 0; i <= 20; i+=2){
//     document.write(`${i}  `)
// }

// document.write("<br>")

// var vetor = [1, 2, 3, 4]

// for(let i = vetor.length - 1; i>=0; i--){
//     document.write(`${vetor[i]}`)
// }

// var num = +prompt("Digite um numero")

// document.write("<br>")

// for(let i = 1; i <= 10; i++){
//     document.write(`${i} * ${num} = ${i * num}<br>`)
// }

// for(let i = 0; i <= 5; i++){
//     for(let j = 0; j <= 5; j++){
//         document.write(`<br>${i} * ${j} = ${i * j}`)
//     }
//     document.write("<br>")
// }

// var soma = 0

// for(let i = 1; i <= 10; i++){
//     soma += i
// }

// document.write(soma)


// for(let i = 0; i <= 20; i+=2){
//     document.write(`${i} `)
// }


// var nome = prompt("Digite seu nome")
// var palavraInvertida = ''

// for(let i = nome.length -1;i >= 0; i--){
//     palavraInvertida += nome[i]
// }

// document.write(`${nome} invertido: ${palavraInvertida}`)


// var nome = prompt("Digite seu nome")
// var maiuscula = nome.toUpperCase()
// var minuscula = nome.toLowerCase()
// document.write(maiuscula)
// document.write('<br>')
// document.write(minuscula)

// var nome = ['Maria', 'Paulo', 'Julia', 'Lucas']

// for(let i = 0; i < nome.length; i++){
//     nome[i] = nome[i].toUpperCase()
// }
// document.write('<br>')
// document.write(nome)


// idade = +(prompt('Digite a sua idade'))
// var res = (idade >= 18)? 'Maior de idade' : 'Menor de idade'
// document.write(res)


// var num = +(prompt('Digite um numero'))
// var res = (num % 2 == 0)? 'Par' : 'Ímpar'
// document.write(res)



// var nota = +(prompt('Digite a nota do aluno'))
// var conceito = (nota >= 9) ? 'A' :
//                 (nota >= 8) ? 'B' :
//                 (nota >= 7) ? 'C' :
//                 (nota >= 6) ? 'D' : 'E'

// document.write(conceito)


// var temp = +(prompt('Digite a temperatura da pessoa: '))
// var saude = (temp < 35) ? 'Hitepormia' :
//             (temp < 37.5) ? 'Narmol' :
//             (temp < 39) ? 'Frebe' : 'Febre alta'
// document.write(saude)


// var sexo = prompt('Digite F(feminino), M(masculino) ou O(outros)')
// sexo = sexo.toLowerCase()
// switch(sexo){
//     case 'f': 
//     document.write('Feminino')
//     break

//     case 'm':
//     document.write('Masculino')
//     break

//     case 'o':
//     document.write('Outros')
//     break

//     default:
//     document.write('Opção inválida')
//     break
// }

// var temp = +(prompt('Digite a temperatura'))
// var status = ''

// switch(true){
//  case(temp < 15):
//      status = 'Frio' 
//     break
//  case(temp >= 15 && temp < 25):
//      status = 'Agradavel'
//      break

// }