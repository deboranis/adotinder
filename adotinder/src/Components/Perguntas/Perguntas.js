import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Button } from "reactstrap";
import './perguntas.css';

const perguntas = [
        {
            pergunta: "O que você está buscando?",
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
    },
    {
        pergunta: "Pronto para ver seus matches?",
        alternativas: [
            {texto: "Sim!", item: "a"}
        ]
    }
]

function Questionario (props) {
    const history = useHistory();
    const [resposta, setResposta] = useState([]);
    const [contador, setContador] = useState(0);
    const registraResposta = (item) => {
        if((contador===1 && item === "d") || (contador===4 && item ==="b")){
            history.push({
            pathname: "/Negativa",
            state: {respostasUsuario: resposta}
            })
         }
        setContador(contador+1)
        setResposta([...resposta, item])
        if(contador >= perguntas.length-1) {
            history.push({
                pathname: "/Resultado",
                state: {respostasUsuario: resposta}
            });
        }
    }


    return (
      <div className="container_perguntas">
          <div className="div_perguntas">
          <h2 className="titulo_perguntas">{perguntas[contador].pergunta}</h2>
            {perguntas[contador].alternativas.map((alternativa) => {
                return <div className="alt_perguntas"><Button className="botao_perguntas" onClick={()=>{registraResposta(alternativa.item)}}>{alternativa.texto}</Button></div>
            })}
        </div>
      </div>
    );
  
}
export default Questionario;
