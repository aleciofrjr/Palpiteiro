import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/PALPITEIRO.png";

import { Form, Container } from "./styles";

class CadTeam extends Component {
  state = {
    teamname: "",
    cnpj: "",
    dataFund: "",
    posicao: "",
    pontosGanhos: "",
    jogosDisp: "",
    error: ""
  };

  handleCadTeam = async e => {
    e.preventDefault();
    const { teamname, cnpj, dataFund, posicao, pontosGanhos, jogosDisp } = this.state;
    if (!teamname || !cnpj || !dataFund || !posicao || !pontosGanhos || !jogosDisp) {
      this.setState({ error: "Preencha todos os dados para cadastrar o time" });
    } else {
      try {
        await api.post("/users", { teamname, cnpj, dataFund, posicao, pontosGanhos, jogosDisp });
        this.props.history.push("http://localhost:8080/entidade/api/Clube");
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
            onChange={e => this.setState({ teamname: e.target.value })}
          />
          <input
            type="text"
            placeholder="CNPJ"
            onChange={e => this.setState({ cnpj: e.target.value })}
          />        
          <input
            type="Date"
            placeholder="Data de fundação"
            onChange={e => this.setState({ dataFund: e.target.value })}
          />
          <input
            type="Interger"
            placeholder="Posição"
            onChange={e => this.setState({ posicao: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Pontos Ganhos"
            onChange={e => this.setState({ pontosGanhos: e.target.value })}
          />  
          <input
            type="Number"
            placeholder="Jogos Disputados"
            onChange={e => this.setState({ jogosDisp: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/CadJog">Cadastrar Jogador</Link>
          <Link to="/CadTec">Cadastrar Técnico</Link>
          <Link to="/Cadastro">Voltar para Menu anterior</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(CadTeam);
