import React from "react";

interface CardProps {
  title: string;
  image: string;
  subtitle: string;
  description: string;
}

const Card = ({ description, image, subtitle, title }: CardProps) => {
  return (
    <div className="@xl:grid @xl:grid-cols-[1fr_3fr] mb-2">
      <div
        className="bg-no-repeat bg-cover bg-center h-64 min-h-full rounded-t-3xl @xl:rounded-tr-none @xl:rounded-l-3xl"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-2">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <h4 className="mb-2 italic">{subtitle}</h4>
        <p className="hidden @xl:block">{description}</p>
      </div>
    </div>
  );
};

export default Card;
