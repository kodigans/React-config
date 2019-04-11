import { createGlobalStyle } from 'styled-components';

import AvenirTtf from './Avenir-Light.ttf';
import  AvenirWoff from './Avenir-Light.woff2';

export const Fonts = createGlobalStyle`
@font-face {
    font-family: 'Avenir';
    src: url(${AvenirWoff}) format('woff2'),
         url(${AvenirTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;

