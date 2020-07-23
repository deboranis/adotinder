import React from 'react';
import pets from '../../pets';
import Card from '../Card/Card';
import { Container } from 'reactstrap';
import './resultado.css'


const Resultado = (props) =>{

    return(
        <Container>
        <h1 className="matches">Aqui estão seus matches!</h1>
            {pets.map((pet, index) => {
                return (
                <div key={index}>
                <Card 
                    pet={pet}
                />
                </div>
                )
            } )}
        </Container>
    )
}

export default Resultado;