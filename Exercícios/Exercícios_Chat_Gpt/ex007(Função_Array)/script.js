// Função de Maior Número em um Array:
// Implemente uma função chamada maiorNumero que receba um array de números e retorne o maior número presente no array.

let vetor = []

for(let i = 0; i<5; i++){
    let num = +(prompt(`Digite o ${i+1} número`))
    vetor.push(num)
}
function maior(x){
    let mai = 0
    mai = vetor[0]
    for(let i = 0; i < 5; i++){
        if(x[i] > mai){
            mai = x[i]
        }
    }
    return mai
}
document.write(`Maior número no vetor: ${maior(vetor)}`)