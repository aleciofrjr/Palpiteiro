import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class CadJog extends Component {
  state = {
    userId: "",
    name: "",
    cpf: "",
    dataNasc: "",
    rua: "",
    number: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    error: ""
  };

  handleCadJog = async e => {
    e.preventDefault();
    const { userId, name, cpf, dataNasc, rua, number, bairro, cidade,uf, cep } = this.state;
    if (!userId  || !name  || !cpf  || !dataNasc  || !rua  || !number  || !bairro  || !cidade  || !uf  || !cep) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { userId, name, cpf, dataNasc, rua, number, bairro, cidade,uf, cep });
        this.props.history.push("http://localhost:8080/entidade/api/Jogador");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };
  ///...
  
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCadJog}>
          <img src={Logo} alt="PALPITEIRO logo" /> 
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Jogador ID"
            onChange={e => this.setState({ userId: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="CPF"
            placeholder="CPF"
            onChange={e => this.setState({ cpf: e.target.value })}
          />        
          <input
            type="Data"
            placeholder="Data de Nascimento"
            onChange={e => this.setState({ dataNasc: e.target.value })}
          />
          <input
            type="text"
            placeholder="Rua"
            onChange={e => this.setState({ rua: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Número"
            onChange={e => this.setState({ number: e.target.value })}
          />  
          <input
            type="text"
            placeholder="Bairro"
            onChange={e => this.setState({ bairro: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cidade"
            onChange={e => this.setState({ cidade: e.target.value })}
          />
          <input
            type="Adrees"
            placeholder="Estado"
            onChange={e => this.setState({ estado: e.target.value })}
          />          
          <input
            type="Integer"
            placeholder="CEP"
            onChange={e => this.setState({ cep: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/CadTeam">Cadastrar Time</Link>
          <Link to="/CadTec">Cadastrar Técnico</Link>
          <Link to="/Cadastro">Voltar para Menu anterior</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(CadJog);
