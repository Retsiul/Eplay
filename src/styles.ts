import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const breakPoints ={
desktop:'1024px',
tablet:'768px'

}


export const GlobalCss = createGlobalStyle`
*{
margin:0;
border:0;
padding:0;
font-family:Roboto, sans-serif;
list-style:none;
}

body{
background-color:${cores.preto};
color:${cores.branca};
padding-top:40px;

}


.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

 @media(max-width:${breakPoints.desktop}){
 max-width:80%;

}
}

`
