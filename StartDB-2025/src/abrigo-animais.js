class AbrigoAnimais {
  constructor() {
    // Lista dos animais com nome, tipo e brinquedos
    this.animais = [
      { nome: "Rex", tipo: "cão", brinquedos: ["RATO", "BOLA"] },
      { nome: "Mimi", tipo: "gato", brinquedos: ["BOLA", "LASER"] },
      { nome: "Fofo", tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
      { nome: "Zero", tipo: "gato", brinquedos: ["RATO", "BOLA"] },
      { nome: "Bola", tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
      { nome: "Bebe", tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
      { nome: "Loco", tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
    ];
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try {
      // transforma as strings de brinquedos em listas
      const pessoa1 = brinquedosPessoa1.split(",").map(b => b.trim().toUpperCase());
      const pessoa2 = brinquedosPessoa2.split(",").map(b => b.trim().toUpperCase());
      const ordem = ordemAnimais.split(",").map(a => a.trim());

      // checar se existem duplicados nos brinquedos
      if (new Set(pessoa1).size !== pessoa1.length || new Set(pessoa2).size !== pessoa2.length) {
        return { erro: "Brinquedo inválido" };
      }

      // checar animais duplicados ou inválidos
      if (new Set(ordem).size !== ordem.length) {
        return { erro: "Animal inválido" };
      }

      const nomesValidos = this.animais.map(a => a.nome);
      for (let nome of ordem) {
        if (!nomesValidos.includes(nome)) {
          return { erro: "Animal inválido" };
        }
      }

      let adotadosPessoa1 = 0;
      let adotadosPessoa2 = 0;
      let resultado = [];

      for (let nomeAnimal of ordem) {
        const animal = this.animais.find(a => a.nome === nomeAnimal);

        let pessoa1Serve = this.comparaBrinquedos(animal, pessoa1);
        let pessoa2Serve = this.comparaBrinquedos(animal, pessoa2);

        // regra especial do Loco (jabuti)
        if (animal.nome === "Loco") {
          if (resultado.length > 0) {
            if (adotadosPessoa1 < 3) {
              resultado.push(`${animal.nome} - pessoa 1`);
              adotadosPessoa1++;
            } else if (adotadosPessoa2 < 3) {
              resultado.push(`${animal.nome} - pessoa 2`);
              adotadosPessoa2++;
            } else {
              resultado.push(`${animal.nome} - abrigo`);
            }
          } else {
            resultado.push(`${animal.nome} - abrigo`);
          }
          continue;
        }

        // regra: se os dois podem adotar, fica no abrigo
        if (pessoa1Serve && pessoa2Serve) {
          resultado.push(`${animal.nome} - abrigo`);
          continue;
        }

        if (pessoa1Serve && adotadosPessoa1 < 3) {
          resultado.push(`${animal.nome} - pessoa 1`);
          adotadosPessoa1++;
        } else if (pessoa2Serve && adotadosPessoa2 < 3) {
          resultado.push(`${animal.nome} - pessoa 2`);
          adotadosPessoa2++;
        } else {
          resultado.push(`${animal.nome} - abrigo`);
        }
      }

      // retorna lista ordenada em ordem alfabética
      return { lista: resultado.sort() };

    } catch (e) {
      return { erro: "Erro inesperado" };
    }
  }

  // função simples para verificar se brinquedos de uma pessoa batem com os do animal
  comparaBrinquedos(animal, brinquedosPessoa) {
    const favoritos = animal.brinquedos;
    let i = 0;

    for (let brinquedo of brinquedosPessoa) {
      if (brinquedo === favoritos[i]) {
        i++;
      }
      if (i === favoritos.length) return true;
    }

    return false;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
