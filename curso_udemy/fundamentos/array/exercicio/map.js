const pessoas = [
    {nome: 'natan', idade: 20},
    {nome: 'davi', idade: 23},
    {nome: 'daniel', idade: 26},
    {nome: 'katia', idade: 56},
]

const apenasNome = pessoas.map((pess) =>{
    return pess.nome;
});

const removeChaveNome = pessoas.map((pess)=>{
    return {idade: pess.idade}
});

const comId = pessoas.map((pess, indice) =>{
    pess.id = (indice+1)*100
    return pess
});

console.log(apenasNome);
console.log(removeChaveNome);
console.log(comId);



