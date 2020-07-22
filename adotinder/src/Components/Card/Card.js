
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardPet = (nomePet,
                tipoPet,
                descPet,
                pesoPet,
                idadePet,
                energiaPet,
                socialPet) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Foto do pet" />
        <CardBody>
          <CardTitle>{nomePet}</CardTitle>
          <CardSubtitle>{tipoPet}</CardSubtitle>
          <CardText>{descPet}</CardText>
          <ul>
              <li>{pesoPet}</li>
              <li>{idadePet}</li>
              <li>{energiaPet}</li>
              <li>{socialPet}</li>
          </ul>
          <Button>Quero conhecer {nomePet}!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardPet;