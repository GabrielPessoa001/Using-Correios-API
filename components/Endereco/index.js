import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container,
         Input, 
         Label, 
         Error, 
         Card, 
         Button, 
         GroupButtons, 
         GroupCards,
         DataCard,
         Select,
         Option,
         NoneDiv,
         MyForm } from './style';

const Endereco = () => {
  const [ ceps = [], setCeps ] = useState([])
  const [ logradouro, setLogradouro ] = useState('')
  const [ localidade, setLocalidade ] = useState('')
  const [ uf, setUf ] = useState('')
  const [ conf, setConf ] = useState('')

  const [ myUfs, setMyUfs ] = useState([])

  useEffect(() => {
    async function fetchMyUfs () {
      let response = await axios.get('api/uf')
  
      setMyUfs(response.data)
    }
  
    fetchMyUfs()
  }, [])

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
      <MyForm>
        <Label>
          UF  <Select onChange={ e => setUf(e.target.value) }>
                <Option key="NONE" value="NONE"> Escolha uma opção </Option>
                {
                  myUfs 
                  ?
                  myUfs.map(c => <Option key={ c.uf } value={ c.uf }>{ c.name }</Option> )
                  :
                  <NoneDiv></NoneDiv>
                }
              </Select>
        </Label>

        <Label>
          Localidade <Input value={ localidade } onChange={ e => setLocalidade(e.target.value) } />
        </Label>
        
        <br/>

        <Label>
          Logradouro <Input value={ logradouro } onChange={ e => setLogradouro(e.target.value) } />
        </Label>
      </MyForm>

      <GroupButtons>
        <Button value="Pesquisar" type="submit" onClick={ searchWithEndereco } />
        <Button value="Limpar" type="submit" onClick={ cleanState } />
      </GroupButtons>

      <GroupCards>
        {
          ceps
          ?
          ceps.map(c => ( <Card key={ c.cep }>
            <DataCard>{ c.bairro }</DataCard>
            <DataCard>{ c.cep }</DataCard></Card>
          ))
          :
          <NoneDiv>NADA</NoneDiv>
        }
      </GroupCards>

      { conf ? <Error>O CEP não foi encontrado</Error> : <NoneDiv></NoneDiv> }
    </Container>
  )
}

export default Endereco
