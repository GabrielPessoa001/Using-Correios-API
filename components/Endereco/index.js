import React, { useState } from 'react';

import axios from 'axios';

import { Container, Input, Label, Error, Text, Card } from './style';

const Endereco = () => {
  const [ cep, setCep ] = useState('');
  const [ logradouro, setLogradouro ] = useState('')
  const [ complemento, setComplemento ] = useState('')
  const [ localidade, setLocalidade ] = useState('')
  const [ bairro, setBairro ] = useState('')
  const [ uf, setUf ] = useState('')
  const [ conf, setConf ] = useState('')

  function cleanState () {
    setCep('')
    setLogradouro('')
    setComplemento('')
    setLocalidade('')
    setBairro('')
    setUf('')
    setConf('')
  }

  function errorState () {
    cleanState

    setConf('Not found')
  }

  async function searchWithEndereco () {
    const URL_ENDERECO = `https://viacep.com.br/ws/${ uf }/${ localidade }/${ logradouro }/json/`;

    console.log(URL_ENDERECO)

    let response;
    
    try {
      response = await axios.get(URL_ENDERECO);

      console.log(response.data)

      let { cep, complemento, bairro } = response.data;

      setCep(cep)
      setComplemento(complemento)
      setBairro(bairro)
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
        <Text>Cep: { cep }</Text>
        <Text>Bairro: { bairro }</Text>
      </Card>

      { conf ? <Error>O CEP não foi encontrado</Error> : <div>BAU</div> }
    </Container>
  )
}

export default Endereco
