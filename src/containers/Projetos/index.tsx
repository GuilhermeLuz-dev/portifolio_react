import Title from '../../components/Title'
import Projeto from '../../components/Projeto'
import { Lista } from './styles'

const Projetos = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <Lista>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
        <li>
          <Projeto></Projeto>
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
