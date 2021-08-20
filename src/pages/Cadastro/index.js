import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class Cadastro extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleCad = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };
  ///...
  
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCad}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          <button type="submit">Cadastrar Técnico</button>
          <button type="submit">Cadastrar Jogador</button>
          <button type="submit">Cadastrar Time</button>
          <hr />
          <Link to="/">Voltar para Home</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Cadastro);
