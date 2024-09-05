//Número 1
// let num = 1
// while(num <= 10){
//     document.write(`${num} `)
//     num ++
// }


//Número 2
// let num = +(prompt('Digite um número: '))
// let soma = 1
// var res = 0

// while(soma <= num){
//     res += soma
//     soma++
// }
// document.write(res)


//Número 3
// var num = 20
// do{ 
//     document.write(`${num} `)
//     if(num == 10){
//         document.write('Lançamento')
//     }
//     num--
// } while(num >= 10)


//Número 4
// do{
//     num = +(prompt('MENU... 1- continuar, 2 repetir, 3 sair'))
// } while(num != 3)


//Número 5
// let senha = 'senha'
// do{

//     var res = prompt('Digite a senha: ')
//     if(res != senha){
//         alert('Senha incorreta. Tente novamente')
//     } else{
//         alert('Você acertou a senha.')
//     }
// } while(res != senha)



//Número 6
// function saudacao(x){
//     return `Oi, ${x}!`
// } 
// var nome = 'laura'
// document.write(`${saudacao(nome)}`)


// Número 7
// function potencia(x, y){
//     var cont = 1
//     var res = x
//     while(cont < y){
//         res *= x
//         cont++
//     }
//     return res
// }

// var base = +(prompt('Digite a base'))
// var expoente = +(prompt('Digite o expoente'))
// document.write(`${base} elevado a ${expoente} = ${potencia(base, expoente)}`)


//Número 8

// function ehPalindromo(frase){
//     var invertida = ''
//     for(let i = frase.length - 1; i>=0; i--){
//         invertida += frase[i]
//     }
//     return invertida === frase
// }

// let string = prompt('Digite uma palavra.')
// document.write(ehPalindromo(string))


//Número 9
// function calculadora(n1, n2, ope){
//     switch (ope){
//         case '+':
//             return n1 + n2

//         case '-':
//             return n1 - n2

//         case '*':
//             return n1 * n2

//         case '/':
//             return n1 / n2

//         default:
//             return 'operador inválido.'
//     }
// }

// let num1 = +(prompt('Digite um número: '))
// let num2 = +(prompt('Digite outro número:'))
// do{
//     var operador = prompt('Digite um operador:')
// } while(operador != '+' && operador != '-' && operador != '*' && operador != '/')
// document.write(`${num1} ${operador} ${num2} = ${calculadora(num1, num2, operador).toFixed(0)}.`)