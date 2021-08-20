import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class CadTeam extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleCadTeam = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para cadastrar o time" });
    } else {
      try {
        await api.post("/users", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar os dados do time." });
      }
    }
  };
  ///...
  
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCadTeam}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome do time"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="CNPJ"
            onChange={e => this.setState({ email: e.target.value })}
          />        
          <input
            type="Date"
            placeholder="Data de fundação"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="Interger"
            placeholder="Posição"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Pontos Ganhos"
            onChange={e => this.setState({ email: e.target.value })}
          />  
          <input
            type="text"
            placeholder="Bairro"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Jogos Disputados"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="Adrees"
            placeholder="Estado"
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

export default withRouter(CadTeam);
