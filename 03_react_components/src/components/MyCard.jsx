import React from "react";

const MyCard = ({ imgSlot, avatarSlot, titleSlot, descriptionSlot }) => {
  return (
    <div
      style={{
        width: "20rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div>{imgSlot}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px",
        }}
      >
        <div>{avatarSlot}</div>
        <div>
          <div style={{ fontSize: "15px", paddingBottom: "4px" }}>
            {titleSlot}
          </div>
          <div style={{ fontSize: "11px" }}>{descriptionSlot}</div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
