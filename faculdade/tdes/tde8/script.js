
var btnResetar = document.getElementById('resetar')
var qtdTecla = 0
document.addEventListener('keydown', function(event){
    if(event.key == 'a' || event.key == 'A'){
        qtdTecla+=1
        document.getElementById('res1').innerHTML = `A tecla 'a' foi digitada ${qtdTecla} vezes`
    }
})
btnResetar.addEventListener('click', function(){
    qtdTecla = 0
    document.getElementById('res1').innerHTML = `A tecla 'a' foi digitada ${qtdTecla} vezes`
})
