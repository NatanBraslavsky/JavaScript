// let alturaMedia = 1.70
// let pesoMedia = 70
// let imc = pesoMedia / Math.pow(alturaMedia, 2)
// alert(`IMC medio: ${imc}.toFixed(2)`)



// let anos = +(prompt('Digite a quantos anos você fuma: '))
// let cigarros = +(prompt('Digite a quantos cigarros você fuma por dia: '))
// let cartela = +(prompt('Digite o preço da cartela: '))
// let qtdCartelaPorDia = cigarros / 20
// let anosEmDias = anos * 365
// let calculo = qtdCartelaPorDia * cartela * anosEmDias
// alert(`Você gastou: R$${calculo}`)


// let nomeMaisVelho
// let amaliaIdade = +(prompt('Idade de Amalia:' ))
// let joaquimIdade= +(prompt('Idade de Joaquim:' ))
// if(amaliaIdade > joaquimIdade){
// 	nomeMaisVelho = 'Amalia'
// } else if(amaliaIdade == joaquimIdade){
// 	nomeMaisVelho = 'Idades iguais'
// } else{
// 	nomeMaisVelho = 'Joaquim'
// }
// alert('Nome do mais velho: '+ nomeMaisVelho)



// function morreu(dano, saude){
// 	let dead = false
// 	if(dano >= saude){
// 		dead = true
// }
// return dead
// }

// let dano = +(prompt('Dano que tomou: '))
// let saude = +(prompt('Saúde total: '))
// let estado = morreu(dano, saude)
// if(estado){
// 	alert('Morreu')
// } else{
// 	alert('Viveu')
// }



// let sorteados = []
// for(let i = 0; i < 6; i++){
//     sorteados[i] = Math.floor(Math.random()*60)
// }

// let escolhidos = []
// for(let i = 0; i < 6; i++){
//     escolhidos[i] = +(prompt('Escolha um valor: '))
// }
// let qtdAcertos = 0
// for(let j = 0; j < 6; j++){
//     for(let i = 0; i < 6; i++){
//         if(escolhidos[j] == sorteados[i]){
//             qtdAcertos++
//         }
//     }
// }
// alert('Números sorteados: ' + sorteados + ' Quantidade de acertos: ' + qtdAcertos)
// alert('As chances de você acertar é de : ' + (1/Math.pow(60,6)))




// let distancia = +(prompt('Digite a distância em quilômetros: '))
// let custo
// switch(true){
// 	case (distancia <= 100):
// 		custo = distancia * 10
// 		break
// 	case (distancia > 100 && distancia <= 300):
// 		custo = distancia * 8
// 		break
// 	case(distancia > 300):
// 		custo = distancia * 5
// 		break
// 	default:
// 		console.log('Quilômetragem inválida.')
// }
// alert(`O custo de envio é de R$ ${custo}`)




function contarVogal(frase){
	let qtdVogal = 0
	let tamanhoFrase = frase.length
	let vogais = 'aeiouAEIOU'
	if(tamanhoFrase === 0){
		return 0;
	} else{
		for(let i = 0; i < tamanhoFrase; i++){
			if(vogais.includes(frase[i])){
				qtdVogal++
			}
		}
	}
	return qtdVogal;
}
let frase = prompt('Digite uma frase: ');
let qtdVog = contarVogal(frase)
alert(`Quantidade de vogais: ${qtdVog}`)