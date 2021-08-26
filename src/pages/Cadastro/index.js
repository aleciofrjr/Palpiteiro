import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class Cadastro extends Component {
  
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCad}>
          <img src={Logo} alt="PALPITEIRO logo" />
          <Link to="/Palpite"><button type="submit">Palpite da Partida</button></Link>
          <Link to="/CadTec"><button type="submit">Cadastrar Técnico</button></Link>
          <Link to="/CadJog"><button type="submit">Cadastrar Jogador</button></Link>
          <Link to="/CadTeam"><button type="submit">Cadastrar Adversário</button></Link>
          <hr />
          <Link to="/">Voltar para Home</Link> 
        </Form>
      </Container>
    );
  }
}

export default withRouter(Cadastro);
