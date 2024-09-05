function carregar(){
    var agora = new Date() // pegar data atual
    var hora = agora.getHours()  // pegar hora
    var resp = window.document.getElementById('agora') // pegar a div agora para mostrar a resposta
    var img = window.document.getElementById('img') //pegar a div com id imagem
    resp.innerHTML = `Agora são ${hora} horas.` // mostrar a hora

    if(hora < 12 && hora > 0){ //manha
        img.src = 'manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora < 18 && hora >= 12) { //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }   else { //noite
            img.src = 'noite.avif'
            document.body.style.background = '#515154'
        }
    }   