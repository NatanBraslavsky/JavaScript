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


function contarVogais(frase){
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let qtdVogais = 0
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < frase.length; j++){
            if(frase[i] == vogais[j]){
                qtdVogais++
            }
        }
    }
    return qtdVogais
}
let frase = 'ola mundo'
let qtdVogal = contarVogais(frase)
console.log(qtdVogal)
