import React from 'react';
import './card.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

const CardPet = (props) => {
  return (
    <div className="bg_card">
      <Card className="pet_card">
        <CardImg className="img_card" top width="100%" src={props.pet.imagem} alt="Foto do pet" />
        <CardBody>
          <CardTitle><h3>{props.pet.nome}</h3></CardTitle>
          <CardSubtitle>{props.pet.especie}, {props.pet.idade}</CardSubtitle>
          <CardText>{props.pet.sobre}</CardText>
              <p>{props.pet.peso} <br/> Castrado: {props.pet.castrado} - Vacinado: {props.pet.vacinado} <br/> {props.pet.socializacao} <br/>
              {props.pet.localizacao}</p>
          <Button className="botao_card">Quero conhecer {props.pet.nome}!</Button>
        </CardBody>
      </Card>
      </div>
  );
};

export default CardPet;