/*
Nível 1 – Fundamentos

Troca de variáveis sem variável auxiliar

Receba dois números a e b e troque os valores sem criar uma terceira variável.

Maior de três números

Leia três números e mostre qual é o maior (sem usar funções prontas como max).

Contador de dígitos pares

Dado um número inteiro, conte quantos dígitos pares ele possui.

Nível 2 – Condições e laços

Números primos em intervalo

Receba dois números e exiba todos os primos entre eles.

Soma dos múltiplos de 3 ou 5

Some todos os números de 1 até n que sejam múltiplos de 3 ou 5.

Inverter número

Receba um número inteiro e exiba-o invertido (ex.: 1234 → 4321) sem converter para string.

Nível 3 – Vetores e algoritmos

Remover duplicados

Dado um vetor, gere outro sem elementos repetidos, mantendo a ordem.

Segundo maior número

Encontre o segundo maior elemento de um vetor sem ordená-lo.

Verificar anagramas

Escreva uma função que verifica se duas palavras são anagramas (contêm as mesmas letras em qualquer ordem).

Nível 4 – Desafios lógicos

Sequência de Collatz

Para qualquer número n:

se n for par, divida por 2;

se for ímpar, multiplique por 3 e some 1.

Repita até chegar em 1 e conte quantos passos foram necessários.

Subvetor com maior soma (Kadane sem nome)

Encontre o subvetor contíguo com a maior soma possível.

Labirinto simples

Dada uma matriz 0/1 (0 = caminho livre, 1 = parede), descubra se há um caminho do canto superior esquerdo até o canto inferior direito.
*/


//? 1-1
// let [a,b] = [5,10];
// let c = a;
// a = b;
// b = c;
// console.log(a, b);

//? 1-2
// const maiorValor = (a, b, c) => {
//     let maior = a;
//     if(b > maior) maior = b;
//     if(c > maior) maior = c;
//     return maior;
// }

// let [a, b, c] = [2, 5, 8];
// const maior = maiorValor(a,b,c);
// console.log(maior);

//? 1-3
// function paresNumero(a){
//     let aString = a.toString();
//     let stringArray = aString.split('');
//     const par = stringArray.filter((num)=>{
//         return num % 2 == 0;
//     })

//     return par.length;
// }

// let a = 528;
// console.log(paresNumero(a));

//? 2-4
// function primos(a, b){
//     let valoresPrimos = [];
//     let divisores;
//     for(let i = a; i <= b; i++){
//         divisores = 0;
//         for(let j = 1; j <= i; j++){
//             if(i % j == 0){
//                 divisores++;
//             }
//         }
//         if(divisores == 2) {
//             valoresPrimos.push(i)
//         };
//     }
//     return valoresPrimos;
// } 

// let [inicio, fim] = [1, 9];
// let valoresPrimos = primos(inicio, fim)
// console.log(valoresPrimos);

//?2-5
// function somaMult_3ou5(n){
//     let multiplos_3ou5 = []
//     for(let i = 1; i <= n; i++){
//         if(i % 3 == 0 || i % 5 == 0) {
//             multiplos_3ou5.push(i)
//         };
//     }
//     let soma = multiplos_3ou5.reduce((acumulador, valor) => {
//         return acumulador + valor;
//     })
//     return soma;
// }

// let limite = 50;
// let soma = somaMult_3ou5(limite);
// console.log(soma);

//?2-6
// function inverso(num){
//     let numString = num.toString();
//     let inverso = numString.split('').reverse().join('');
//     return Number(inverso);
// }  

// let numero = 523;
// console.log(inverso(numero))

//?3-7