function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criancahomem.jpg')
            } else if (idade < 30){
                // Jovem
                img.setAttribute('src', 'adolhomem.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpeg')
            }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criancamulher.jpg')
            } else if (idade < 30){
                // Jovem
                img.setAttribute('src', 'adolmulher.jpeg')
            } else {
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`${gênero} com ${idade} anos`)
        res.appendChild(img)
    }
}