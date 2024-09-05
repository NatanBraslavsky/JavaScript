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
function palindromo(nom){
    let invert = nom.split('').reverse().join('')
    return invert === nom
}
nome = prompt('Digite seu nome')
document.write(palindromo(nome))