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

//? exercício for

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const containerElementos = document.querySelector("#exFor");
elementos.map((element) => {
    const ele = document.createElement(`${element.tag}`);
    ele.textContent = element.texto;
    containerElementos.appendChild(ele);
})


