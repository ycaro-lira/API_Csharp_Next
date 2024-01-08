// DestinosCard.js
import React from 'react';

const DestinosCard = ({ destinoId, lugar, preco, imagemUrl }) => {
  return (
    <div className="card">
      <img src={imagemUrl} className="card-img-top" alt={lugar} />
      <div className="card-body">
        <h5 className="card-title">{lugar}</h5>
        <p className="card-text">Preço:R${preco}</p>
      </div>
    </div>
  );
};

export default DestinosCard;
