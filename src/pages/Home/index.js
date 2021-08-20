import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/PALPITEIRO.png";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class Home extends Component {
  state = {
    user: "",
    password: "",
    error: ""
  };

  handleHome = async e => {
    e.preventDefault();
    const { user, password } = this.state;
    if (!user || !password) {
      this.setState({ error: "Preencha com o seu Login e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { user, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleHome}>
          <img src={Logo} alt="Palpiteiro logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="login"
            placeholder="Login"
            onChange={e => this.setState({ user: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar uma conta para o Sistema</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Home);
