const pessoas = [
    {nome: 'natan', idade: 20},
    {nome: 'davi', idade: 23},
    {nome: 'daniel', idade: 26},
    {nome: 'katia', idade: 56},
]

const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade > valor.idade) return acumulador
    return valor
});

console.log(maisVelha)