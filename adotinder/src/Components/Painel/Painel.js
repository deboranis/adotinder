import './painel.css';
import React from 'react';
import Button from '../Button/Button';
import quadro1 from '../img/quadro1.jpg';
import quadro2 from '../img/quadro2.jpg';

function Painel() {
    return(
        <div>
            <div className="painel_1">
                <div className="textos_1">
                    <h1 id="titulo_1">Bem vindo <br/> ao Adotinder!</h1>
                    <h3 className="lead">Facilitando o match de tutores e pets</h3>
                </div>
                    <img src={quadro1} alt="imagem pet" className="quadros"></img>
            </div>
            
            <div className="painel_2">
                <div className="imagem2_container">
                    <img src={quadro2} alt="imagem pet" className="quadros"></img>
                </div>
                <div className="textos_2">
                    <h2 className="titulo_2">Aqui você encontra os pets mais próximos de você, que estão aguardando adoção aos cuidados de ONGs e protetores parceiros!</h2>
                </div>
            </div>
            <article className="painel_3">
                <h2 id="titulo_3">O Adotinder tem um algoritmo que mostra os melhores pets pro seu estilo de vida em aproximadamente 30 segundos! <br /> Quer testar?</h2>
                <Button />
            </article>
        </div>
    )
}

export default Painel;