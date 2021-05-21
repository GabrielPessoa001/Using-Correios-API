import Link from 'next/link'

import { Container, GroupButtons, Title } from './style';

function Navbar () {
  return (
    <>
      <Container>
        <Title>Seu mundo</Title>

        <GroupButtons>
          <Link href="/cep"><a>CEP</a></Link>
          <Link href="/endereco"><a>Endereço</a></Link>
        </GroupButtons>
      </Container>
    </>
  )
}

export default Navbar;
