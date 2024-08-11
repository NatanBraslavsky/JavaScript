function verificar(){ 
    var data = new Date()
    var ano = data.getFullYear()//pegar o ano atual
    var fano = document.getElementById('txtano')//pegar o ano digitado
    var res = document.getElementById('res')//pegar a resposta
    if (fano.value.length == 0 || fano.value > ano){//verificar se o ano nao for digitado ou maior que o ano atua
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//pegar o sexo escolhifo
        var idade = ano - Number(fano.value)//calcular idade
        var gênero = ''
        var img = document.createElement('img')//cria ums imagem
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