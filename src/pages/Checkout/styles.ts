import styled from "styled-components";
import { cores } from "../../styles";

export const Row=styled.div`
display:flex;
column-gap:24px;
margin:0 9px;

`

export const InputGroup = styled.div`
flex:auto;
display:flex;
flex-direction:column;
align-items:center;

label{
font-size:14px;
margin-bottom:8px;
display:block;

}

input{
background:${cores.branca};
border:solid 1px ${cores.branca};
height:32px;
padding:0 8px;
width:100%;
}

`