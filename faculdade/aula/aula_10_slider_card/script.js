// var slides = ["img1.webp", "img2.webp", "img3.webp", "img4.webp", "img5.webp"]
// var tam = slides.length
// var satual = 0
// var tmpSlider
// function trocaAutomatica(){
//     satual++
//     if(satual >= tam){
//         satual = 0
//     }
//     document.querySelector('#dvSlider').style.backgroundImage = `url("${slides[satual]}")`
// }

// function inicialSlider(){
//     document.querySelector('#dvSlider').style.backgroundImage=`url("${slides[satual]}")`
//     tmpSlider = setInterval(trocaAutomatica, 2000)
// }

// function parar(){
//     clearInterval(tmpSlider)
// }

// function troca(num){
//     satual+=num

//     if(satual >= tam){
//         satual = 0
//     }

//     if(satual < 0){
//         satual = tam - 1
//     }

//     document.querySelector('#dvSlider').style.backgroundImage=`url("${slides[satual]}")`
// }


function expandCard(card){
    card.style.transform = 'scale(1.05)'
    card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)'
}

function shinkCard(card){
    card.style.transform = 'scale(1)'
    card.style.boxShadow = 'none'
}