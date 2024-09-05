let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vetores = []

function isNumero(n) { //função pra verificar se é um número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //função pra verificar se existe o numero digitado no vetor
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { //função pra adicionar o número na lista
    if(isNumero(num.value) && !inLista(num.value, vetores)) {
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function finalizar() { //função que finaliza a resposta
    if(vetores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0]
        let soma = 0
        let media = 0
        for(let pos in vetores) {
            soma += vetores[pos]
            if (vetores[pos] > maior) {
                maior = vetores[pos]
            }
            if (vetores[pos] < menor) {
                menor = vetores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
    }
}