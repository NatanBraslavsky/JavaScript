//?objeto

const pessoa = {
    nome: "natan",
    sobrenome: "braslavsky",
    idade: 20,
};

for (const chave in pessoa) {
    console.log(`Seu/Sua ${chave} é ${pessoa[chave]}`);
}

//?construtor
function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    //metodo dentro do objeto
    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    };
}

const p1 = new Pessoa("natan", "pereira", 20)
console.log(p1.nomeCompleto())
