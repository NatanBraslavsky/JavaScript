let elemento1 = document.getElementsByClassName('elemento')[0]

elemento1.addEventListener('mousedown', () => {
    console.log('Botão do mouse pressionado.')
})

let elemento2 = document.getElementsByClassName('elemento')[1]

elemento2.addEventListener('mouseup', () => {
    elemento2.innerHTML = 'Você soltou'
})

let elemento3 = document.getElementsByClassName('elemento')[2]
elemento3.addEventListener('click', function(){
    alert('Botão clicado. ')
})

let elemento4 = document.getElementsByClassName('elemento')[3]
elemento4.addEventListener('dblclick', function(){
    elemento4.style.backgroundColor = 'rgb(118, 118, 245)'
})

let elemento5 = document.getElementsByClassName('elemento')[4]
elemento5.addEventListener('mousemove', function(event){
    elemento5.innerHTML = (event.pageX + ':' + event.pageY)
})

let elemento6 = document.getElementsByClassName('elemento')[5]
elemento6.addEventListener('mouseenter', function(){
    elemento6.style.backgroundColor = 'rgb(118, 118, 245)'
})

const elemento7 = document.getElementsByClassName('elemento')[6]
let offsetX, offsetY
let isDragging = false
elemento7.addEventListener('mousedown', function(event){
    isDragging = true
    offsetX = event.clientX - elemento7.getBoundingClientRect().left
    offsetY = event.clientY - elemento7.getBoundingClientRect().top
    elemento7.innerHTML = 'Arraste'
})

document.addEventListener('mousemove', (e) => {
    if(isDragging){
        elemento7.style.left = `${e.clientX - offsetX}px`
        elemento7.style.top = `${e.clientY - offsetY}px`
        elemento7.innerHTML = 'Solte'
    } 
})

document.addEventListener('mouseup', () => {
    isDragging = false
    elemento7.innerHTML = 'Pressione'
})