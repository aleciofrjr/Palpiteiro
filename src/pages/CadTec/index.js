import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class CadTec extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleCadTec = async e => {
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
        <Form onSubmit={this.handleCadTec}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="CBF ID"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome do Técnico"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="CPF"
            placeholder="CPF"
            onChange={e => this.setState({ email: e.target.value })}
          />        
          <input
            type="Data"
            placeholder="Data de Nascimento"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Rua"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Número"
            onChange={e => this.setState({ email: e.target.value })}
          />  
          <input
            type="text"
            placeholder="Bairro"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cidade"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="Adrees"
            placeholder="Estado"
            onChange={e => this.setState({ email: e.target.value })}
          />          
          <input
            type="Integer"
            placeholder="CEP"
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

export default withRouter(CadTec);
