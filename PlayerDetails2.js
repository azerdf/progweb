import React from 'react'
import PlayerDetails from './PlayerDetails';
import 'bootstrap/dist/css/bootstrap.css'

class PlayerDetails2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.jogadores.nome}
        <div> {this.props.jogadores.time}
        </div>
        <div>{this.props.jogadores.pais}</div>
      </div>
    );
  }
}

export default PlayerDetails2
