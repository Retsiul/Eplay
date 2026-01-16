import styled from 'styled-components'
import { TagContainer } from '../Tag/style'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-bottom: 50px;
  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 0;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Preco = styled.p`
  margin-top: 24px;
  font-size: 24px;
  span {
    text-decoration: line-through;
  }
`
