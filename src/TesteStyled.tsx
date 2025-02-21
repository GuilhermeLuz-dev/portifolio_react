import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function TesteStyled() {
  return (
    <>
      <Botao principal>Click Aqui</Botao>
      <Botao principal={false}>Click Aqui</Botao>
      <BotaoPerigo as="a">
        <span>Não click Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default TesteStyled
