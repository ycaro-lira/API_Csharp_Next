import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";


const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7104/api/Cliente")
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Clientes Cadastrados</h1>
      <div className="row">
        {clients.map((element) => (
          <div key={element.clienteId} className="col-md-4 mb-4">
            <Card
              clienteId={element.clienteId}
              nome={element.nome}
              email={element.email}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

