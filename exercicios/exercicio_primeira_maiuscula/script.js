let nome = '           natan pereira braslavsky'
function capitaliza(x){
    return x.split(' ').map(function(x){
        return x.charAt(0).toUpperCase() + x.slice(1)
    }).join(' ')
}
nome = capitaliza(nome.trim())
console.log(nome)
