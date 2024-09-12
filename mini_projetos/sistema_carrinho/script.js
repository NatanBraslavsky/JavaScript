//carrinho
let carrinhoIcone = document.querySelector('#icone_sacola')
let carrinho = document.querySelector('.carrinho')
let fechadoCarrinho = document.querySelector('#fechar_carrinho')
//Abre carrinho
carrinhoIcone.onclick = () => {
    carrinho.classList.add("ativo")
}
//Fecha carrinho
fechadoCarrinho.onclick = () => {
    carrinho.classList.remove("ativo")
}

//carrijnho funcionando
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

//Fazendo funcão
function ready(){
    //remove items do carrinho
    var removeCarrinhoBotoes = document.getElementsByClassName('carrinho_remove')
    console.log(removeCarrinhoBotoes)
    for(var i = 0; i < removeCarrinhoBotoes.length; i++){
        var button = removeCarrinhoBotoes[i]
        button.addEventListener('click', removeCarrinhoItem)
    }
    // Quantidade mudanças
    var quantidadeInputs = document.getElementsByClassName('carrinho_qtd')
    for(var i = 0; i < quantidadeInputs.length; i++){
        var input = quantidadeInputs[i]
        input.addEventListener('change', quantidadeMudada)
    }
    // Adiciona o carrinho
    var addCarrinho = document.getElementsByClassName('add_cart')
    for (var i = 0; i < addCarrinho.length; i++){
        var botao = addCarrinho[i]
        botao.addEventListener('click', addCarrinhoClicado)
    }
}

//remove items do carrinho
function removeCarrinhoItem(event){
    var botaoClicado = event.target
    botaoClicado.parentElement.remove()
    atualizartotal()
}

// quantidade de mudanças
function quantidadeMudada(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    atualizartotal()
}

//Adiciona ao carrinho
function addCarrinhoClicado(event){
    var botao = event.target
    var shopProdutos = botao.parentElement
    var titulo = shopProdutos.getElementsByClassName('produto_titulo')[0].innerText
    var preco = shopProdutos.getElementsByClassName('preco')[0].innerText
    var imagemProduto = shopProdutos.getElementsByClassName('produto_img')[0].src
    console.log(titulo,preco, imagemProduto)
}

//Atualizando total
function atualizartotal(){
    var carrinhoConteudo = document.getElementsByClassName('carrinho_conteudo')[0]
    var carrinhoBoxes = carrinhoConteudo.getElementsByClassName('carrinho_box')
    var total = 0
    for( var i = 0; i < carrinhoBoxes.length; i++){
        var carrinhoBox = carrinhoBoxes[i]
        var precoElemento = carrinhoBox.getElementsByClassName('carrinho_preco')[0]
        var quantidadeElemento = carrinhoBox.getElementsByClassName('carrinho_qtd')[0]
        var preco = parseFloat(precoElemento.innerText.replace("R$", ""))
        var quantidade = quantidadeElemento.value
        total = total + (preco * quantidade)
        total = Math.round(total * 100) / 100

        document.getElementsByClassName('total_preco')[0].innerText = "R$" + total
    }
}
