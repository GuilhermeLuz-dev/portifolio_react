import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, ButtonTema, SidebarContainer } from './style'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Guilherme Luz</Title>
        <Paragrafo tipo="secundario" fontSize={16}>
          GuilhermeLuz-Dev
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-End
        </Descricao>
        <ButtonTema>Trocar tema</ButtonTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
