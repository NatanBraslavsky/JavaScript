// ex 001
// var num1 = +(prompt('Digite um numero'))
// var num2 = +(prompt('Digite um numero'))
// var operação = prompt('Digite a operação: ')
// switch(operação){
//     case '+':
//         document.write(`${num1} + ${num2} = ${num1 + num2}`)
//         break

//     case '-':
//         document.write(`${num1} - ${num2} = ${num1 - num2}`)
//         break

//     case '/':
//         document.write(`${num1} / ${num2} = ${num1 / num2}`)
//         break

//     case '*':
//         document.write(`${num1} * ${num2} = ${num1 * num2}`)
//         break

//     default:
//         document.write('Valor invalido')
// }


//ex002
// var valor = +(prompt('Digite o valor total da compra'))
// var codigo = +(prompt('codigo:'))
// var valorFinal = 0

// switch(codigo){
//     case 1:
//         valorFinal = valor
//         break
//     case 2:
//         valorFinal = valor - valor * 10 / 100
//         break
//     case 3:
//         valorFinal = valor - valor * 5 / 100
//         break
//     default:
//         document.write('Nao existe')
// }
// var forma = +(prompt('Forma de pagamento, 1-à vista, 2-à prazo: '))
// switch(forma){
//     case 1:
//         valorFinal = valorFinal - valorFinal * 10 / 100
//         break
//     case 2:
//         valorFinal = valorFinal
//         break
//     default:
//         document.write('Nao existe')
// }

// document.write(valorFinal)


//ex004
// var conceito = prompt('Digite o conceito')
// conceito = conceito.toLowerCase()
// switch(conceito){
//     case 'a':
//         document.write('Excelente')
//         break
//     case 'b':
//         document.write('Ótimo')
//         break
//     case 'c':
//         document.write('Bom')
//         break
//     case 'd':
//         document.write('Regular')
//         break
//     case 'e':
//         document.write('Ruim')
//         break
//     case 'f':
//         document.write('Nos vemos de novo ano que vem...')
//         break
// }


//ex005
// var letra = prompt('Digite a letra')
// letra = letra.toLowerCase()
// switch(letra){
//     case 'a':
//         document.write('Vogal')
//         break
//     case 'e':
//         document.write('Vogal')
//         break
//     case 'i':
//         document.write('Vogal')
//         break
//     case 'o':
//         document.write('Vogal')
//         break
//     case 'u':
//         document.write('Vogal')
//         break
//     default:
//         document.write('Consoante')
// }


//ex006
// var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(var i = 0; i < lista.length; i++){
//     if(lista[i] % 2 == 0){
//         document.write(`${lista[i]}`)
//     }
// }


//ex007
// for(let i = 0; i == 0;){
//     var nota = +(prompt('Nota entre 0 e 10:'))
//     if(nota < 0 || nota > 10){
//         alert('Nota invalida. tente novamente.')
//     } else{
//         document.write('Obrigado. encerrando programa...')
//         i = 1
//     }
// }

//ex008
// for(let i = 0; i == 0;){
//     var nome = prompt('Digite seu nome: ')
//     var senha = prompt('Digite sua senha: ')
//     if(nome === senha){
//         alert('A senha nao pode ser igual ao usuario')
//     } else{
//         document.write('Cadastrado')
//         i = 1
//     }
// }


//ex009
// var num = []
// var soma = 0

// for(let i = 0; i < 3; i++){
//     num[i] = +(prompt('Digite um numero'))
//     soma+=num[i]
// }
// var min = Math.min(...num)
// var max = Math.max(...num)
// document.write(`<br>Minimo: ${min}`)
// document.write(`<br>Máximo: ${max}`)
// document.write(`<br>Soma: ${soma}`)


//ex010
// for(let i = 0; i == 0;){
//     var aluno = +(prompt('Qtd alunos:'))
//     if(aluno > 40){
//         alert('Nao pode ter mais de 40 alunos.')
//     } else{
//         var turma = +(prompt('Qtd turmas: '))
//         var media = aluno / turma
//         i = 1
//     }
// }
// document.write(`Media de alunos por turma: ${media}`)




