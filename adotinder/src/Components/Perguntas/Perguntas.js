import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

const perguntas = [
        {
            pergunta: "O que você esta buscando?",
            alternativas: [
                {texto: "Um companheiro de aventuras!", item: "a"},
                {texto: "Uma companhia doméstica", item: "b"}
            ]
        },
	{
		pergunta: "Você tem uma casa telada e sem rotas de fuga?",
		alternativas: [
			{texto: "Sim, minha casa tem janelas teladas e as portas/portões são totalmente fechados", item: "a"},
			{texto: "Não, mas as janelas são inacessíveis ou não oferecem risco", item: "b"},
			{texto: "Sim, mas posso resolver esse problema!", item: "c"},
			{texto: "Não, minha casa tem rotas de fuga e/ou janelas que podem ocasionar queda e não posso mudar essa situação", item: "d"}
		]
	},
	{
		pergunta: "Qual seu nível de tolerância com bagunça?",
		alternativas: [
			{texto: "Estou preparado pra educar um pet do zero, sei que vai ter bagunça!", item: "a"},
			{texto: "Prefiro não ter muito trabalho, um animal de temperamento conhecido seria melhor", item: "b"}
		]
    },
    {
        pergunta: "Você tem crianças ou outros animais em casa?",
        alternativas: [
            {texto: "Tenho crianças", item: "a"},
            {texto: "Tenho outros animais", item: "b"},
            {texto: "Tenho ambos", item: "c"},
            {texto: "Moro só ou com outros adultos", item: "d"}
        ]
    },
    {
        pergunta: "Falando em outras pessoas, todo mundo na sua residência está de acordo com a ideia de adotar um animal?",
        alternativas: [
            {texto: "Sim!", item: "a"},
            {texto: "Eu pretendia fazer uma surpresa...", item: "b"}
        ]
    }
]

    let iPerguntas = 0;
    let qualquerMerda = [];

function Perguntas (props) {
    const [resposta, setResposta] = useState([]);
    const registraResposta = (item) => {
        qualquerMerda = [...qualquerMerda, item]
        if (iPerguntas < perguntas.length) {
        iPerguntas++} else {
            setResposta(qualquerMerda)
            iPerguntas++
        }
        console.log()
        console.log(qualquerMerda);
    }
    return (
      <Container>
        <div>
          <h3>{perguntas[iPerguntas].pergunta}</h3>
        </div>
        <Row xs="2">
            {perguntas[iPerguntas].alternativas.map((alternativa) => {
                return <Col><Button onClick={()=>{registraResposta(alternativa.item)}}>{alternativa.texto}</Button></Col>
            })}
        </Row>
      </Container>
    );
  
}
export default Perguntas;
