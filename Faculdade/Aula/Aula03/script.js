var num = []
var teste = false

for(var i = 0; i < 5; i++){
    do{
        var prom = +(prompt('Digite um número'))
        if(num.indexOf(prom) == -1){
            num.push(prom)
            teste = true
        }else{
            teste = false
            alert('Digite um número novamente. Esse valor já está na lista.') 
        }
    } while(!teste)
}

document.write(`A lista é ${num}`)

