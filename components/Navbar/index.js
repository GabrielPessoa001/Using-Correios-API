import Link from 'next/link'

import { Container, Title } from './style';

function Navbar () {
  return (
    <>
      <Container>
        <Title>Seu mundo</Title>

        <Link href="/cep"><a>Home</a></Link>
        <Link href="/endereco"><a>Home</a></Link>
      </Container>
    </>
  )
}

export default Navbar;
