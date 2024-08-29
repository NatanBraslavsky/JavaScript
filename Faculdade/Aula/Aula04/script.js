for(let i = 1; i <= 10; i++){
    document.write(`${i}  `) 
}

document.write("<br>")

for(let i = 10; i > 0; i--){
    document.write(`${i}  `);
}

document.write("<br>")

for(let i = 0; i <= 20; i+=2){
    document.write(`${i}  `)
}

document.write("<br>")

var vetor = [1, 2, 3, 4]

for(let i = vetor.length - 1; i>=0; i--){
    document.write(`${vetor[i]}`)
}

var num = +prompt("Digite um numero")

document.write("<br>")

for(let i = 1; i <= 10; i++){
    document.write(`${i} * ${num} = ${i * num}<br>`)
}