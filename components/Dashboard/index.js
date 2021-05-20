import React, { Component } from 'react';

import axios from 'axios';

import { Container, Text } from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { cep: "", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ddd: "", conf: "" }

    this.handleChange = this.handleChange.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.search_with_cep = this.search_with_cep.bind(this)
  }

  handleChange(event) {
    this.setState({ cep: event.target.value });
  }

  cleanState() {
    this.setState({ conf: "Not found", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ddd: "" });
  }

  search_with_cep () {
    const URL_CEP = `https://viacep.com.br/ws/${ this.state.cep }/json`

    axios.get(URL_CEP)
    .then(res => {
      return res.data
    })
    .then(json => {
      let { logradouro, complemento, bairro, localidade, uf, ddd } = json;

      this.setState({ conf: "", logradouro, complemento, bairro, localidade, uf, ddd });
    })
    .catch(() => {
      this.cleanState()
    })
  }

  render() {
    return (
      <Container>
        <label>
          CEP:
          <input value={ this.state.cep } onChange={ this.handleChange } type="text" />
        </label>

        <input value="Pesquisar" type="submit" onClick={ this.search_with_cep } />

        <Text>UF: { this.state.uf }</Text>
        <Text>Localidade: { this.state.localidade }</Text>
        <Text>Bairro: { this.state.bairro }</Text>
        <Text>CONF: { this.state.conf }</Text>
      </Container>
    )
  }
}

export default Dashboard;
