import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const IconWrapper = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  color: #fe4b13;
  margin-top: -1rem;
`;

export const WrapperSaved = styled.section`
  display: grid;
  /* grid-template-rows: min-content auto 48px; */
  height: inherit;
  justify-content: center;
  z-index: 3;
  opacity: 0.75;
  background-attachment: scroll;
  margin-bottom: 2rem;
  max-height: 90vh;
  overflow-y: auto;
`;

export const CardGrid = styled.ul`
  display: grid;
  gap: auto;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  border-radius: 10px;
  justify-content: center;
`;

export const Saved = styled.li`
  display: grid;
  background-color: beige;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
`;

export const Summary = styled.summary`
  &::-webkit-details-marker {
    display: none;
  }
  display: grid;
  text-decoration: underline;
  background-color: transparent;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
`;

export const Details = styled.details`
  display: grid;
  background-color: beige;
  right: 1rem;
  border-radius: 8px;
  text-align: center;
  height: auto;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const BloodSugar = styled.span`
  color: #c92a2a;
`;

export const Insulin = styled.span`
  color: #5c940d;
`;

export const Carbohydrates = styled.span`
  color: #e67700;
`;

export const Factor = styled.span`
  color: #2b8a3e;
`;

export const InsulinUnits = styled.span`
  color: #364fc7;
`;

export const Timestampwraper = styled.span`
  color: #008080;
  font-size: 0.8rem;
  display: grid;
  margin-top: 0.3rem;
`;

export const SearchData = styled.span`
  display: grid;
  margin: 0.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const DataInput = styled.input`
  width: auto;
  text-align: center;
  height: 2.4rem;
  border-radius: 8px;
  background-color: beige;
  color: black;
  border: none;
  opacity: 0.85;
`;

export const CheckBox = styled.div`
display: flex;
justify-items: left;
height: 1rem;
width: 1rem;
margin-bottom: -0.5rem;
cursor: pointer;
`;

export const Button = styled.button`
 background-color: cadetblue;
 color: black;
font-family: monospace;
font-size: larger;
 border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  height: 1.8rem;
 margin: 0.4rem;
  width: 14.3rem;
  cursor: pointer;
`;

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;

export const SavedData = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 3rem;
  z-index: 1;
`;
