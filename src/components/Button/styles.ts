import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../../src/styles'
import type { Props } from '.'
export const ButtonContainer = styled.button<Props>`
  color: ${cores.branca};
  border: solid 2px ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.branca};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  font-size:16px;
  font-weight;bold;
  padding:8px 16px;
  border-radius:8px;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  border: solid 2px ${cores.branca};
  background-color: transparent;
  font-size:16px;
  font-weight;bold;
  padding:8px 16px;
  text-decoration:none;
  border-radius:8px;
`
