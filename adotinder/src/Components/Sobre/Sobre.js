import React from 'react';
import './sobre.css';
import { Container } from 'reactstrap';

function Sobre() {
    return(
        <Container className="bg_sobre">
            <div className="sobre">
            <p>Essa plataforma foi desenvolvida pela aluna Débora Nisenbaum como projeto de conclusão de curso do curso de front-end da Reprograma. <br/> Foram usados React e Bootstrap (Reactstrap). O código está disponível para consulta no Github.</p>
            </div>
        </Container>
    )
}

export default Sobre;