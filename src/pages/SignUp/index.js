import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    id_user: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { id_user, email, password } = this.state;
    if (!id_user || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/User", { id_user, email, password });
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
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="ID Usuario"
            onChange={e => this.setState({ username: e.target.value })}
          />      
          <input
            type="text"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/">Voltar para Home</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
