import { createGlobalStyle, css} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
:root{
  --white: #fff;
  --black: #000;
  --color1: #f7f1ff;
  --color2: #4a45bd;
  --color3: #707070
}


${({theme}) => css`
html{
  font-size: 62.5%;
  min-height: 100%
}
body{
  background: ${theme.colors.lightGray};
  font-family: ${theme.font.family}
  font-size: ${theme.font.sizes.medium}
}
`}
html, body, #__next{
  height: 100%
}


body,input,textarea,select,button{
  font:400 1rem "Inter", sans-serif;
}
button{
  cursor: pointer;
}
a{
  color: inherit;
  text-decoration: none;
}
`

export default GlobalStyles