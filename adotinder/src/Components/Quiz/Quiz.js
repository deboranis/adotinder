const listaPets = [
  {
    "nome": "Spot",
    "imagem": "doguinhosfofinhos.com/123123165",
    "sobre": "Spot é um doguinho muito fofinho e com MUITA energia!",
    "respostasValidas": {
      p1: ["a"],
      p2: ["a", "b", "c"],
      p3: ["a", "b"],
      p4: ["a", "b", "c", "d"]
    }
  }
]

//aqui onde ficam armazenados os states
const respostasUsuario = {
  p1: "a",
  p2: "b",
  p3: "a",
  p4: "d"
}

const selecionarPets = (escolhas, bichinhos) => {
  return bichinhos.filter(dog => 
    dog.respostasValidas.p1.includes(escolhas.p1) &&
    dog.respostasValidas.p2.includes(escolhas.p2) &&
    dog.respostasValidas.p3.includes(escolhas.p3) &&
    dog.respostasValidas.p4.includes(escolhas.p4)
  )
}

const petsSelecionadosParaFulano = selecionarPets(respostasUsuario, listaPets)

console.log(petsSelecionadosParaFulano)

const perguntas = {
	perguntaUm: {
		pergunta: "O que vc esta buscando?",
		alternativas: [
			{texto: "lorem", item: "a"},
			{texto: "lorem", item: "b"}
		]
	},
	perguntaDois: {
		pergunta: "O que vc esta buscando?",
		alternativas: [
			{texto: "lorem", item: "a"},
			{texto: "lorem", item: "b"},
			{texto: "lorem", item: "c"}
		]
	},
	perguntaTres: {
		pergunta: "O que vc esta buscando?",
		alternativas: [
			{texto: "lorem", item: "a"},
			{texto: "lorem", item: "b"}
		]
	}

}