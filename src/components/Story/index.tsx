import React from "react";

import "./style.css";

export interface StoryProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  name: string;
}

export const Story = ({ img, name }: StoryProps) => {
  return (
    <div className="container-stories">
      <img {...img} alt={img.alt} />
      <p>{name}</p>
    </div>
  );
};
