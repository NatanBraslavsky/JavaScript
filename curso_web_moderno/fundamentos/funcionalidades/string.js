const escola = "Cod3r champ"

console.log(escola.charAt(4))//Caracter na posição x
console.log(escola[4])
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))//Existe x em y?

console.log(escola.substring(2))//Exiba da posição 2 adiante
console.log(escola.slice(2))
console.log(escola.substring(0, 4))
console.log(escola.slice(0,4))//exiba da posição 0 até o 4 e não mostre o 4

console.log('Escola '.concat(escola).concat('!'))//concatenação
console.log(escola.replace(3, 'e'))//Coloca 'e' no lugar do caracter 3.

console.log('Ana,Maria,Pedro'.split(','))//Gera um array buscando pela ',' que pedi

