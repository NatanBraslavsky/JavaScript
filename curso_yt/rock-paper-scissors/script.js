let btnChoice = window.document.querySelectorAll(".btnChoice")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let pcChoice = getRandomInt(3)
let escolhaPc = {
    0:"Rock",
    1:"Paper",
    2:"Scissors",
}

btnChoice.forEach(btn => {
    btn.addEventListener("click", ()=> {
        if(btn.getAttribute('value')==0){
            alert(`Your choice: 'Rock'. Computer choice: ${escolhaPc[pcChoice]}`)
            if(pcChoice == 0){
                alert("Draw.")
            } else if(pcChoice == 1){
                alert("Pc wins.")
            } else{
                alert("You win.")
            }
        } else if(btn.getAttribute('value')==1){
            alert(`Your choice: 'Paper'. Computer choice: ${escolhaPc[pcChoice]}`)
            if(pcChoice == 0){
                alert("You win")
            } else if(pcChoice == 1){
                alert("Draw")
            } else{
                alert("Pc wins")
            }
        } else{
            alert(`Your choice: 'Scissors'. Computer choice: ${escolhaPc[pcChoice]}`)
            if(pcChoice == 0){
                alert("Pc wins")
            } else if(pcChoice == 1){
                alert("You win")
            } else{
                alert("Draw")
            }
        }
    })
});




















// const escolha = {
//     "rock":0,
//     "paper":1,
//     "scissors":2,
// }
