import "./style.css";

export interface CardProps {
  title?: string;
  description?: string;
  alt?: string;
  image?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export const Card = ({ title, description, image, alt }: CardProps) => {
  return (
    <div className="container">
      {image && <img {...image} alt={alt ?? ""} />}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
