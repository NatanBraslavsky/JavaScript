document.querySelector('.btnCreate').addEventListener('click',()=>{

    const firstName = document.querySelector('.FirstNameInput');
    let txtErrorFirstName = document.querySelector('.errorName');
    let input = document.querySelector('.form input');

    if(firstName.value === ''){
        txtErrorFirstName.innerHTML = 'Esse campo é obrigatório';
        
        input.style.border = '1px solid rgb(246, 69, 69)';

        input.addEventListener('focus',()=>{
            input.style.outline = 'none';
        });
    }

    else if(firstName.value.length < 3){
        txtErrorFirstName.innerHTML = 'Mínimo de 3 caracteres';

        input.style.border = '1px solid rgb(246, 69, 69)';

        input.addEventListener('focus',()=>{
            input.style.outline = 'none';
        });
    }

    else{
        txtErrorFirstName.innerHTML = '';
        input.style.border = 'none';

        input.addEventListener('focus',()=>{
            input.style.outline = '1.75px solid var(--btnColor)';
        });
    }
})


