// Importar Bibliotecas
import React from 'react';

// Criar componentes
const PlayerDetails = (props) => {
  return (
    <div>
      <h1>{props.jogadores.nome}</h1>
      <h2>{props.jogadores.time}</h2>
      <h3>{props.jogadores.pais}</h3>
    </div>
  );
}

//Exportar componentes
export default PlayerDetails;