// Home.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DestinosCard from '../components/DestinosCard';

const Home = () => {
  const [destinos, setDestinos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://localhost:7104/api/Destino')
      .then((response) => {
        console.log(response.data);
        setDestinos(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de destinos:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Destinos Disponíveis</h1>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div className="row">
          {destinos.map((element) => (
            <div key={element.destinoId} className="col-md-4 mb-4">
              <DestinosCard
                destinoId={element.destinoId}
                lugar={element.lugar}
                preco={element.preco}
                imagemUrl={element.imagemUrl}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

