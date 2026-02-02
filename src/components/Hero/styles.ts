import styled from 'styled-components'
import { breakPoints, cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Banner = styled.div`
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;
  padding-top: 16px;

@media(max-width:${breakPoints.tablet}){
  background-size: cover;
}

  &::after {
    top: 0;
    left: 0;
    position: absolute;
    background: #111;
    opacity: 56%;
    content: ' ';
    width: 100%;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 1;
  }
`

export const Infos = styled.div`
  max-width: 290px;
  font-weight: bold;
  padding: 16px;
  background: ${cores.preto};

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
