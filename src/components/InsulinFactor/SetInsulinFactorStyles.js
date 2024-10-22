import styled, { keyframes } from 'styled-components';

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(180deg);
 }
 to {
   -webkit-filter: hue-rotate(-180deg);
 }
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
  margin-top: 1rem;
  z-index: 1;
`;

export const Label = styled.label`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min 5rem;
  z-index: 1;
  opacity: 0.8;
`;

export const LabelFa = styled(Label)`
  color: #364fc7;
`;

export const DataInput = styled.input`
  text-align: center;
  z-index: 1;
  border-style: groove;
  background-color: transparent;
  appearance: none;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DataInputMorning = styled(DataInput)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const DataInputLate = styled(DataInput)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  height: 20px;
  z-index: 1;
  opacity: 0.9;
`;

export const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  gap: auto;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  justify-content: center;
  z-index: 1;
`;

export const InsulinFactorTitle = styled.h2`
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  color: purple;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.8rem;
  margin-top: 2rem;
  text-align: center;
  z-index: 1;
`;
