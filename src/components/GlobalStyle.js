import styled, { createGlobalStyle } from 'styled-components';
import { happyBlooddrop } from '../public/happyBlooddrop.png'


export const GlobalStyle = createGlobalStyle`
*,*::after, *::before {
    box-sizing:border-box;
}
body {
    margin: 0;
    padding: 0;
    background-image: url(/happyBlooddrop.png);
    background-size: cover;   /* Bild skaliert, um den gesamten Bildschirm zu füllen */
  background-position: center center; /* Bild wird zentriert */
  background-repeat: no-repeat; 
  overflow: auto;
    @media only screen and (min-device-width: 480px){
    gap: 4rem;
    .scroll-container {
    max-height: 90vh;
  }
    
}
@media (max-width: 600px) {
    .scroll-container {
    max-height: 80vh; /* Weniger Platz auf kleineren Bildschirmen */
  }
    .grid {
       width: 100%;
       flex-direction: column;
    }}}
`;

export const Popup = styled.div`
position: sticky;
background-color: green;
text-align: center;
color: white;
padding: 10px;
border-radius: 5px;
z-Index: 1000;
`;
