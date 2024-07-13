import React from "react";

const Card = ({ title, text, children }) => (
  <div className="card m-2 border-warning mb-3 rounded-4">
    <div className="card-body text-warning bg-dark">
      <h5 className="card-title">{title || "Card title"}</h5>
      <p className="card-text">{text}</p>
      {children}
    </div>
  </div>
);
export default Card;
