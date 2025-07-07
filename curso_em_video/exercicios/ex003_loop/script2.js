function verificar(){
    var txtInicio = window.document.getElementById('txtInicio')
    var txtFim = window.document.getElementById('txtFim')
    var txtPasso = window.document.getElementById('txtPasso')
    var numInicio = Number(txtInicio.value)
    var numFim = Number(txtFim.value)
    var numPasso = Number(txtPasso.value)
    var res = window.document.getElementById('res')
    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.length == 0 || numFim == numInicio){
        res.innerHTML = 'Valor inválido'
    } else{
        res.innerHTML = 'Contando...'
        for(numInicio; numInicio <= numFim; numInicio+=numPasso){
            res.innerHTML += `${numInicio} `      
        }
    }
}