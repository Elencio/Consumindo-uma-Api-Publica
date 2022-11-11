import { useEffect, useState } from "react";
import './assets/app.css';

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const Data = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/paises/"
      );
      const JSON = await Data.json();

      setCount(JSON);
    };

    try {
      requestData();
    } catch (error) {
      console.log("Error! Somenthing went Wrong");
    }
  }, []);

  return (
 <div>
<h1 className="container1">Consumindo Uma API Publica de Paises</h1>

      <div className="App">
        <table>
          <thead>
            <tr className="container">
              <th>Nome do Pais</th>
              <th>Governo</th>
              <th>Localizacao</th>
              <th>Lingua Official</th>
              <th>Historico</th>
            </tr>
          </thead>
          <tbody>
            {count.map((counts) => (
              <tr>
                <th>{counts.nome?.abreviado}</th>
                <th>{counts.governo?.capital?.nome}</th>
                <th>{counts.localizacao?.regiao?.nome}</th>
                <th>{counts.linguas[0]?.nome}</th>
                <th>{counts.historico}</th>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default App;
