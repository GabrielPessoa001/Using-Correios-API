import React, { Component } from 'react';

import axios from 'axios';

import { Container, Text, Label, Input, Card, Error, Button, GroupButtons } from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { cep: "", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ddd: "", conf: "" }

    this.handleChange = this.handleChange.bind(this);
    this.errorState = this.errorState.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.search_with_cep = this.search_with_cep.bind(this)
  }

  handleChange (event) {
    this.setState({ cep: event.target.value });
  }

  errorState () {
    this.setState({ conf: "Not found", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ddd: "" });
  }

  cleanState () {
    this.setState({ conf: "", cep: "", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ddd: "" });
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
      this.errorState()
    })
  }

  render() {
    return (
      <Container>
        <Label>
          CEP <Input value={ this.state.cep } onChange={ this.handleChange } type="text" />
        </Label>

        <GroupButtons>
          <Button value="Pesquisar" type="submit" onClick={ this.search_with_cep } />
          <Button value="Limpar" type="submit" onClick={ this.cleanState } />
        </GroupButtons>

        <Card>
          <Text>UF: { this.state.uf }</Text>
          <Text>Localidade: { this.state.localidade }</Text>
          <Text>Bairro: { this.state.bairro }</Text>
        </Card>

        { this.state.conf ? <Error>O CEP não foi encontrado</Error> : <div></div> }
      </Container>
    )
  }
}

export default Dashboard;
