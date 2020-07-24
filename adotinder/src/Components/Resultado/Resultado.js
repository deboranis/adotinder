import React from 'react';
import pets from '../../pets';
import Card from '../Card/Card';
import './resultado.css'
import { useLocation } from 'react-router-dom';

function Resultado(props) {
    let location = useLocation();
    const respostasUsuario = location.state.respostasUsuario;
    const matches = pets.filter(
        dog => dog.respostasValidas.every((question, i) => question.includes(respostasUsuario[i]))
    )
    console.log(location)
    return(
        <div className="container_matches">
        <h1 className="titulo_matches">Aqui estão seus matches!</h1>
        <div className="div_pets">
            {matches.map((pet, index) => {
                return (
                <div key={index}>
                <Card 
                    pet={pet}
                />
                </div>
                )
            } )}
            </div>
        </div>
    )
}

export default Resultado;