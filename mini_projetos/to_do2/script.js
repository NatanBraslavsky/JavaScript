document.querySelector('#btnAdd').addEventListener('click', ()=>{
    if(document.querySelector('#inputAdd').value.length == 0){
        alert('Campo obrigatório')
    } else{
        const inputText = document.querySelector('#inputAdd').value
        document.querySelector('.containerPrincipalTarefas').innerHTML += `
            <div class="containerTarefas">
                <div class="tarefas">${inputText}</div>
                <button class="delete">X</button>
            </div>
        `
        const btnDelete = document.querySelectorAll(".delete")
        for(let i = 0; i < btnDelete.length; i++){
            btnDelete[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        const contTarefas = document.querySelectorAll('.containerTarefas')
        for(let i = 0; i < contTarefas.length; i++){
            contTarefas[i].onclick = function(){
                const task = document.querySelectorAll('.tarefas');task[i].classList.toggle('feito')
            }
        }
        document.querySelector('#inputAdd').value = ''
    }
});


