//IMPORTAR BIBLIOTECA

import React from 'react';
import ReactDOM from 'react-dom';
import PlayerDetails2 from './PlayerDetails2'
import PlayerDetails from './PlayerDetails'
import 'bootstrap/dist/css/bootstrap.css'

//CRIAR COMPONENTE


class App extends React.Component {

  jogadores = [
    {
      nome: "Ronaldinho",
      time: "Prisão paraguai",
      pais: "BRASIL"
    },
    {
      nome: "gabigol",
      time: "Flamengo",
      pais: "Brasil"
    },
    {
      nome: "Ronaldo",
      time: "Rodizio",
      pais: "Brasil"
    }
  ]

  constructor(props) {
    super(props);

    this.state = {
      indice: 0
    }

  }



  incrementarIndice = (event) => {

    if (this.state.indice <= this.jogadores.length - 2) {
      this.setState({
        indice: this.state.indice + 1
      })
    }
  }

  decrementarIndice = (event) => {

    if (this.state.indice != 0) {
      this.setState({
        indice: this.state.indice - 1
      })
    }


  }

  render() {
    return (
      <div>

        <div
          class="container">
          <div class="container">
            <h1>Jogadores</h1>
            {this.jogador}
          </div>

          <PlayerDetails2 jogadores={this.jogadores[this.state.indice]}></PlayerDetails2>

          <div>

          </div>


          <button type="button" class="primary" onClick={this.decrementarIndice}>
            anterior
                   </button>

          <button type="button" class="primary" onClick={this.incrementarIndice}>proximo</button>


        </div>

      </div>



    );

  }

}

//MOSTRAR COMPONENTE NA TELA
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

