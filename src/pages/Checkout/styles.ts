import styled from "styled-components";
import { colors } from "../../styles";

type InputTypeProps = {
  $maxWidth?: string;
};

type RowProps = {
  $marginTop?: string;
};

type TabButtonProps = {
  $isActive: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin: 0 9px;
  margin-top: ${({ $marginTop }) => $marginTop || "0"};
`;

export const InputGroup = styled.div<InputTypeProps>`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ $maxWidth }) => $maxWidth || "auto"};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    align-self: flex-start;
    margin-left: -9px;
  }

  input,
  select {
    background: ${colors.white};
    border: solid 1px ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`;

export const TabButton = styled.button<TabButtonProps>`
    border-radius:8px;
    font-size:14px
    font-weight:Bold;
    display:inline-flex;
    align-items:center;
    color:${colors.white};
    background:${({ $isActive }) => ($isActive ? colors.green : colors.black)};
    height:32px;
    margin-right:16px;
    padding:0 8px;
    cursor:pointer; 

    img{
    margin-right:8px;
    }
`;
