// var a = new Array(1,2)
// document.write(a)

// var b = new Array(true,1,2,3,4,new Array(1,2,3),'a')
// document.write(`<br>${b}`)
// document.write(`<br>${b[2]}`)
// document.write(`<br>${b[5][1]}`)
// document.write(`<br>${b[5][2]}`)

// //length

// document.write(`<br>O tamanho do array é ${b.length}`)

// //IndexOf

// document.write(`<br>A posição do elemento encontra-se na posição : ${b.indexOf('a')}`)

// //LastIndexOf()- informa a ultima ocorrência do elemento------

// document.write(`<br> A ultima ocorrência do elemento é: ${b.lastIndexOf(2)}`)

// //Externo

// var nota = []

// for(let i = 0; i < 3; i++){
//     nota[i] = +(prompt('Digite sua nota: '))
// }

// document.write(`<br>As notas são: ${nota}`)

// //Sting

// nome = 'Thereza'
// document.write(`<br>O tamanho do array é ${nome.length}`)
// document.write(`<br> a posição do último elemento no array ${nome.lastIndexOf('e')}`)

// //Inserir novos elementos no array

// var e = [1,2,3,4]
// e[4] = 'Novo valor'
// document.write(`<br>${e}`)

// //ou

// e[e.length] = 'Valor Novo'
// document.write(`<br>${e}`)



// var pessoa = ['Ana', 'Liz', 'Eva', 'FLora', 'Isabel']

// for(let i = 0; i < pessoa.length; i++){
//     document.write(`<br>Nome: ${pessoa[i]}`)
// }


//Função de ordenação---------------

var pessoa = ['Ana', 'Liz', 'Eva', 'Flora', 'Isabel']
document.write(`<br>${pessoa}`)
document.write(`<br>A ordem invertida do array é : ${pessoa.reverse()}`)

//sort


document.write(`<br>A ordem alfabetica do array é ${pessoa.sort()}`)

//concat()

var f = [1,2,3,5]
var g = [6,7,8]
var concat = f.concat(g)
document.write(concat.length)

//includes() - verifica se um determinado elemento encontra-se no array

document.write(`<br>O numero 2 encontra-se no array? ${f.includes(2)}`)
