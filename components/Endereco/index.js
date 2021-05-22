import React, { useState } from 'react';

import axios from 'axios';

import { Container, Input, Label, Error, Text, Card } from './style';

const Endereco = () => {
  const [ ceps = [], setCeps ] = useState([])
  const [ logradouro, setLogradouro ] = useState('')
  const [ localidade, setLocalidade ] = useState('')
  const [ uf, setUf ] = useState('')
  const [ conf, setConf ] = useState('')

  function cleanState () {
    setCeps([])
    setLogradouro('')
    setLocalidade('')
    setUf('')
    setConf('')
  }

  function errorState () {
    cleanState

    setConf('Not found')
  }

  async function searchWithEndereco () {
    const URL_ENDERECO = `https://viacep.com.br/ws/${ uf }/${ localidade }/${ logradouro }/json/`;

    let response;
    
    try {
      response = await axios.get(URL_ENDERECO);

      setCeps(response.data)
    } catch (e) {
      errorState

      console.log(`Erro encontrado: ${ e }`)
    }
  }

  return (
    <Container>
      <Label>
        UF <Input value={ uf } onChange={ e => setUf(e.target.value) } />
      </Label>

      <Label>
        Localidade <Input value={ localidade } onChange={ e => setLocalidade(e.target.value) } />
      </Label>

      <Label>
        Logradouro <Input value={ logradouro } onChange={ e => setLogradouro(e.target.value) } />
      </Label>

      <Input value="Pesquisar" type="submit" onClick={ searchWithEndereco } />

      <Card>
        { ceps ? ceps.map(c => (<div>{ c.bairro } - { c.cep }</div>)) : <div>NADA</div> }
      </Card>

      { conf ? <Error>O CEP não foi encontrado</Error> : <div>BAU</div> }
    </Container>
  )
}

export default Endereco
