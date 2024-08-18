var data = new Date()
var hora = data.getHours()
var texto = window.document.getElementsByTagName('p')[0]
var img = window.document.getElementsByTagName('img')[0]
texto.innerHTML = `São ${hora} horas`
if(hora < 12){
    img.src = 'manhã.jpg'
} else if(hora >= 18){
    img.src = 'noite.avif'
} else{
    img.src = 'tarde.jpg'
}
