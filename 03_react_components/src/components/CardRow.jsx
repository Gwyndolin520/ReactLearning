import React from "react";
import MyCard from "./MyCard";

const CardRow = ({ cardData }) => {
  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
      {cardData.map((card, index) => (
        <MyCard
          key={index}
          imgSlot={
            <img
              src={card.img}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "10rem" }}
            />
          }
          avatarSlot={
            <img
              src={card.avatar}
              alt=""
              style={{ borderRadius: "50%", width: "3rem", height: "3rem" }}
            />
          }
          titleSlot={card.title}
          descriptionSlot={card.description}
        />
      ))}
    </div>
  );
};

export default CardRow;
