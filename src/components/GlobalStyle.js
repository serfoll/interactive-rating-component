import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

import Colors from './Colors';

import overpassRegWoff2 from 'url:../fonts/overpass-v11-latin-regular.woff2';
import overpassRegWoff from 'url:../fonts/overpass-v11-latin-regular.woff';
import overpass700Woff2 from 'url:../fonts/overpass-v11-latin-700.woff2';
import overpass700Woff from 'url:../fonts/overpass-v11-latin-700.woff';

export default createGlobalStyle`

  /* overpass-regular - latin */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${overpassRegWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${overpassRegWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* overpass-700 - latin */
  @font-face {
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${overpass700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${overpass700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  ${normalize}

  *,
  *:before,
  *:after{
    box-sizing: borde-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
  }

  body{
    font-family: 'Overpass', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: ${Colors['very-dark-blue']};

    color: ${Colors.white};

    font-size: 15px;
  }
`;
