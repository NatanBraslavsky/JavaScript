const pessoa = []
const resp = document.querySelector('#resposta');

document.querySelector('button').addEventListener('click', ()=>{
    const nome = document.querySelector('#name').value 
    const idade = document.querySelector('#idade').value 
    const sexo = document.querySelector('#sexo').value
    pessoa.push({name: nome, idade: idade, sexo: sexo})
    resp.innerHTML = pessoa.map((pes) => 
        `${pes.name}, ${pes.idade}, ${pes.sexo}`
    )
});