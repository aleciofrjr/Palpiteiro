import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/3-4-2-1.png";

import { Form, Container } from "./styles";

class Palpite extends Component {

  render() {
    return (
      <Container>
        <Form onSubmit={this.handlePalpite}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          <hr />
          <Link to="/Cadastro">Voltar para Menu anterior</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Palpite);
