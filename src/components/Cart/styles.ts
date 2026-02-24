import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/style";
import { ButtonContainer } from "../Button/styles";
import closeIcon from "../../assets/images/fechar.png";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background: ${colors.gray};
  padding: 40px 16px 0 16px;
  z-index: 1;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`;

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`;

export const Quantity = styled(Prices)`
  font-size: 16px;
  margin: 32px 0 16px 0;
`;
export const CartItem = styled.li`
  display: flex;
  border-bottom: solid 1px ${colors.lightGray};
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${closeIcon});
    width: 16px;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    outline: none;
    aspect-ratio: 1/1;
    position: absolute;
    top: 8px;
    right: 0;
  }
`;
