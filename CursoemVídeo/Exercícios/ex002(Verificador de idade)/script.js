var agora = new Date()
var ano = agora.getFullYear()
var img = window.document.getElementById('img')

function clique(){
    var nasc = window.document.getElementById('txtnum').value
    var resp = window.document.getElementById('result')
    

    var anoNasc = Number(nasc)
    var idade = ano - anoNasc
    resp.innerHTML = idade

    
    if(idade<=12){
        img.src = 'criancahomem.jpg'
    } else if(idade <=30){
        img.src = 'adolhomem.jpg'
    } else {
        img.src = 'idoso.jpeg'
    }
}
