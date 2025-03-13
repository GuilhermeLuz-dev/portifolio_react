import { ReactNode } from 'react'
import { P } from './style'

export interface Props {
  children?: ReactNode
  tipo?: 'secundario' | 'principal'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragrafo
