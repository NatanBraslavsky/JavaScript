function contar(){
    var inicio = window.document.getElementById('txtnum')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var numInicio = Number(inicio.value)
    var numFim = Number(fim.value)
    var numPasso = Number(passo.value)
    var res = document.querySelector('div#res')

    if(passo.value.length == 0 || numPasso == 0){
        numPasso = 1
    }
    if(numPasso <= 0 || inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Valor inválido'
    } else {
        if(numInicio < numFim){
            res.innerHTML = 'Contando <br><br>'
            for(numInicio; numInicio <= numFim; numInicio+=numPasso){
                res.innerHTML += ` ${numInicio} \u{1F449}`
            }
            res.innerHTML += ' Fim\u{1F3C1}'
        } else if(numInicio > numFim){
            res.innerHTML = 'Contando <br><br>'
            for(numInicio; numInicio >= numFim; numInicio-=numPasso){
                res.innerHTML += ` ${numInicio} \u{1F449}`
            }
            res.innerHTML += ' Fim\u{1F3C1}'
        }    
    } 
}
