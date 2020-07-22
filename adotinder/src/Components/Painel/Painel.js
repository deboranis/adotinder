import './painel.css';
import React from 'react';
import Button from '../Button/Button';
import quadro1 from '../img/quadro1.jpg';

function Painel() {
    return(
        <div>
            <div className="painel_1">
                <div className="textos_1">
                    <h1>Bem vindo <br/> ao Adotinder!</h1>
                    <h3 className="lead">Nossa proposta é facilitar o match de tutores e pets</h3>
                </div>

                <div className="imagem1_container">
                    <img src={quadro1} alt="imagem pet" className="quadros"></img>
                </div>
            </div>
            
            <div className="painel_2">
                <div className="imagem2_container">
                    <img src={quadro1} alt="imagem pet" className="quadros"></img>
                </div>
                <div className="textos_2">
                    <h2>Aqui você encontra os pets mais próximos de você, que estão aguardando adoção aos cuidados de ONGs e protetores parceiros!</h2>
                </div>
            </div>
            <article className="container-fluid">
                <h4 className="texto_quiz">O Adotinder tem um algoritmo que mostra os melhores pets pro seu estilo de vida em aproximadamente 30 segundos! <br /> Quer testar?</h4>
                <Button />
            </article>
        </div>
    )
}

export default Painel;