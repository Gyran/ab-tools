import { createGlobalStyle } from 'styled-components';
import Theme from '.';

const GlobalStyles = createGlobalStyle`
html {
  background-color: ${Theme.Colors.Background};
  color: ${Theme.Colors.Text};
}

a, a:visited {
  color: ${Theme.Colors.Link};
}
`;

export default GlobalStyles;
