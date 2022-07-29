import { createGlobalStyle } from "styled-components";
import gothicOTF from "./GothicA1-Regular.otf"
import gothicWOFF from "./GothicA1-Regular.woff2"
import RobotoOTF from "./Roboto-Regular.otf"
import RobotoWOFF from "./Roboto-Regular.woff2"

export default createGlobalStyle`

@font-face {
  font-family: 'gothic-R';
  font-style: normal;
  src: url(${gothicOTF}) format('opentype'),
  url(${gothicWOFF}) format('woff2');
}

@font-face {
  font-family: 'roboto-R';
  font-style: normal;
  src: url(${RobotoOTF}) format('opentype'),
  url(${RobotoWOFF}) format('woff2');
}

`