function gerar(){
    var numtxt = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    var num = Number(numtxt.value)
    res.innerHTML = null
    for(var c = 1; c <= 10; c++){
        res.innerHTML += `${num} * ${c}   =  ${num*c}<br>`
    }
}
