import { ReactNode } from 'react'
import { Titulo as TituloStyle } from './styles'

export interface Props {
  children?: ReactNode
  fontSize?: number
}

const Title = (props: Props) => (
  <TituloStyle fontSize={props.fontSize}>{props.children}</TituloStyle>
)

export default Title
