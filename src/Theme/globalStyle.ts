import colors from './colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    color: white;
    background: ${colors.backgroundApp};
  }
`;
 
export default GlobalStyle;