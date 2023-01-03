import React from "react";
import { Card, CardProps } from "../Card";
import "./style.css";

type Props = {
  cardsData: Array<CardProps>;
};

export const Carousel = ({ cardsData }: Props) => {
  return (
    <div className="carousel-container">
      {cardsData.map(({ title, description, image }) => (
        <Card title={title} description={description} image={image} />
      ))}
    </div>
  );
};
