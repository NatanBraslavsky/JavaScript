//?filter
num = [1,2,3,4,5,6]
numPar = num.filter(myFunction)
function myFunction(num){
    return num % 2 == 0
}
console.log(numPar)

//?map
array = [1,2,3,4,5,6]
arrayVz2 = array.map((num) => {
    return num * 2
})
console.log(arrayVz2)

//?reduce
lista = [1,2,3,4,5,6]