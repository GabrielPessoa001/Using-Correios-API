import React, { Component } from 'react';

import { Container, Text } from './style';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      ddd: "",
      conf: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.search_with_cep = this.search_with_cep.bind(this)
  }

  handleChange(event) {
    this.setState({ cep: event.target.value });
  }

  search_with_cep () {
    const cep_to_search = `https://viacep.com.br/ws/${ this.state.cep }/json/?callback=callback_name`

    fetch(cep_to_search)
    .then(res => {
      return res.json()
    })
    .then(json => {
      let logradouro = json.callback_name.logradouro;
      let complemento = json.callback_name.complemento;
      let bairro = json.callback_name.bairro;
      let localidade = json.callback_name.localidade;
      let uf = json.callback_name.uf;
      let ddd = json.callback_name.ddd;

      console.log("OI");

      this.setState({ letra, complemento, bairro, localidade, uf, ddd });
    })
    .catch(() => {
      let conf = "Not found";

      this.setState({ conf });
    })
  }

  render() {

    return (
      <div className="container">

        <label>
          CEP:
          <input value={ this.state.cep } onChange={ this.handleChange } type="text" />
        </label>

        <input value="Pesquisar" type="submit" onClick={ this.search_with_cep } />

        <Text>UF: { this.state.uf }</Text>
        <Text>Localidade: { this.state.localidade }</Text>
        <Text>Bairro: { this.state.bairro }</Text>
        <Text>CONF: { this.state.conf }</Text>
      </div>
    )
  }
}

export default Dashboard;
