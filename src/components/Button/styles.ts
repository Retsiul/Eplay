import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../src/styles";
import type { Props } from ".";
export const ButtonContainer = styled.button<Props>`
  color: ${colors.white};
  border: solid 2px ${(props) =>
    props.$variant === "primary" ? colors.green : colors.white};
  background-color: ${(props) =>
    props.$variant === "primary" ? colors.green : "transparent"};
  font-size:16px;
  font-weight;bold;
  padding:8px 16px;
  border-radius:8px;
  cursor:pointer;
`;
export const ButtonLink = styled(Link)`
  color: ${colors.white};
  border: solid 2px ${colors.white};
  background-color: transparent;
  font-size:16px;
  font-weight;bold;
  padding:8px 16px;
  text-decoration:none;
  border-radius:8px;
`;
