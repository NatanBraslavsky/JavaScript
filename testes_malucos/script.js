// var a = [2,4,6];
// var pares = a.every( function(num){
//     return num % 2 == 0;
// })
// console.log(pares);



// let quilometros = +(prompt("Digite a quilometragem: "));
// let quilometros = 301;
// let preco = 0;
// switch(true){
//     case (quilometros <= 100):
//         preco = quilometros * 10;
//         break;
//     case (quilometros <= 300):
//         preco = quilometros * 8;
//         break;
//     case (quilometros > 300):
//         preco = quilometros * 6;
//         break;
//     default:
//         console.log('Quilometragem invalida.');
// }
// console.log(`Preco a pagar por ${quilometros}KM: R$${preco}`);


// let peso = 70;
// let altura = 1.70;
// let imc = peso / Math.pow(altura,2);
// console.log(`IMC: ${imc.toFixed(2)}`);



// let anosFuma = +(prompt("Quantos anos fuma? "));
// let cigarrosPorDia = +(prompt("Quantos cigarros por dia?"));
// let precoCartela = +(prompt("Preço da cartela?"));
// let totalPrecoGasto = (anosFuma * 365 * cigarrosPorDia / 20) * precoCartela;
// alert("Voce gastou R$"+totalPrecoGasto);


// let morrer = function(vida, dano){
//     if(dano >= vida){
//         return true;
//     } else{
//         return false;
//     }
// }
// let dano = 99;
// let vida = 100;
// let morte = morrer(vida, dano);
// if(morte){
//     console.log('morreu');
// } else{
//     console.log('viveu');
// }



// function contarVogais(frase){
//     let qtdVogais = 0;
//     let tamanho = frase.length
//     for(let i = 0; i < tamanho; i++){
//         switch(frase[i]){
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             case 'A':
//             case 'E':
//             case 'I':
//             case 'O':
//             case 'U':
//                 qtdVogais++;
//                 break
//         }
//     }
//     return qtdVogais
// }
// let frase = 'Ola'
// let vogalqtd = contarVogais(frase)
// console.log(vogalqtd)


// function contarVogais(frase){
//     let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
//     let qtdVogais = 0
//     for(let i = 0; i < 10; i++){
//         for(let j = 0; j < frase.length; j++){
//             if(frase[i] == vogais[j]){
//                 qtdVogais++
//             }
//         }
//     }
//     return qtdVogais
// }
// let frase = 'ola mundo'
// let qtdVogal = contarVogais(frase)
// console.log(qtdVogal)




// function contarVogais(frase){
//     let vogais = 'aeiouAEIOU'
//     let qtdVogais = 0
//     for(let i = 0; i < vogais.length; i++){
//         if(vogais.includes(frase[i])){
//             qtdVogais++
//         }
//     }
//     return qtdVogais
// }
// let frase = 'ola mundo'
// let qtdVogal = contarVogais(frase)
// console.log(qtdVogal)



// let quilometros = +(prompt("Digite a quilometragem: "));
// let quilometros = 301;
// let preco = 0;
// switch(true){
//     case (quilometros <= 200):
//         preco = quilometros * 10;
//         break;
//     case (quilometros <= 400):
//         preco = quilometros * 8;
//         break;
//     case (quilometros > 400):
//         preco = quilometros * 6;
//         break;
//     default:
//         console.log('Quilometragem invalida.');
// }
// console.log(`Preco a pagar por ${quilometros}KM: R$${preco}`);




// function contarVogais(string){
//     let qtd = 0
//     for(let i = 0; i < string.length; i++){
//         qtd++;
//     }
//     return qtd
// }
// let frase = 'ola mundo'
// let qtdCaracter = contarVogais(frase)
// console.log(qtdCaracter)



// let frase = 'ola natan'
// frase = frase.split(' ')
// let tamanhoVetor = frase.length
// for(let i = 0; i < tamanhoVetor; i++){
//     frase[i] = frase[i].charAt(0).toUpperCase() + frase[i].slice(1)
// }
// console.log(frase.join(' '))


//[4,3,2,5]
// function ordenar(array){
//     let temp = 0
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[i] < array[j]){
//                 temp = array[i]
//                 array[i] = array[j]
//                 array[j] = temp
//             }
//         }
//     }
//     return array
// }
// let array = [7,5,6,4,5,3,8,5,22]
// array = ordenar(array)
// console.log(array)




// Função de Fatorial:
// Implemente uma função chamada fatorial que receba um número inteiro n e retorne o fatorial de n (n!).

// var n = +(prompt('Digite um número'))
// function fatorial(x) {
//     let fat = 1
//     for(var i = x; i > 0; i--){
//         fat *= i
//     }
//     return fat
// }
// document.write(`O fatorial de ${n} é ${fatorial(n)}`)


//  function ordenar(array){
//     let temp = 0
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(array[i] < array[j]){
//                 temp = array[i]
//                 array[i] = array[j]
//                 array[j] = temp
//             }
//         }
//     }
//     return array
// }
// let array = [7,5,6,4,5,3,8,5,22]
// array = ordenar(array)
// console.log(array)



let frase = 'ola natan'
frase = frase.split(' ')
let tamanhoVetor = frase.length
for(let i = 0; i < tamanhoVetor; i++){
    frase[i] = frase[i].charAt(0).toUpperCase() + frase[i].slice(1)
}
console.log(frase.join(' '))