const pessoas = [
    {nome: 'natan', idade: 20},
    {nome: 'davi', idade: 23},
    {nome: 'daniel', idade: 26},
    {nome: 'katia', idade: 56},
]

const qtdMenorCinco = pessoas.filter((pessoa) =>{
    return pessoa.nome.length >= 5;
})

const idadeCinquenta = pessoas.filter((pessoa)=>{
    return pessoa.idade > 50;
})

const terminaA = pessoas.filter((pessoa)=>{
    return pessoa.nome.charAt(-1) == 'a'
})

console.log(qtdMenorCinco);
console.log(idadeCinquenta);
console.log(terminaA);
