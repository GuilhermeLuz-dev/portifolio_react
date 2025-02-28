import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre Mim</Title>
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores
        optio quibusdam veniam, obcaecati quos illum quod labore reiciendis
        possimus rerum aut cum consectetur, dignissimos nesciunt, officia
        maiores magnam quam.
      </Paragrafo>
      <Githubsecao>
        <img src="https://github-readme-stats.vercel.app/api?username=GuilhermeLuz-Dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GuilhermeLuz-Dev&layout=compact&langs_count=7&theme=dracula" />
      </Githubsecao>
    </section>
  )
}

export default Sobre
