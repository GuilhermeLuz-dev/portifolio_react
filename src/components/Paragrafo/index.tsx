import { ReactNode } from 'react'
import { P } from './style'

export interface Props {
  children?: ReactNode
  tipo?: 'secundario' | 'principal'
}

const Paragrafo = ({ children, tipo }: Props) => <P tipo={tipo}>{children}</P>

export default Paragrafo
