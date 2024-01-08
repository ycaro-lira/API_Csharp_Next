import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ clienteId, nome, email }) => {
  return (
    <div className="card h-100 shadow">
      <div className="card-body">
        <h5 className="card-title">Cliente: {clienteId}</h5>
        <p className="card-text"><strong>Nome:</strong> {nome}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Card;
