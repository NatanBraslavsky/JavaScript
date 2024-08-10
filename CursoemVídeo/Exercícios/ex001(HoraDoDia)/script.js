function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var resp = window.document.getElementById('agora')
    var img = window.document.getElementById('img')
    resp.innerHTML = `Agora são ${hora} horas.`

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
