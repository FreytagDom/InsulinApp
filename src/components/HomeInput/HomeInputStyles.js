import styled from 'styled-components';
// import Image from 'next/image';
import { Img } from 'react-image';

export const Label = styled.label`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: min-content 14vh;
  padding-top: 3vh;
  margin-top: 0.3vh;
  position: sticky;
  opacity: 0.8;
  justify-items: auto;
`;

export const LabelBz = styled(Label)`
  color: #c92a2a;
`;

export const LabelIu = styled(Label)`
  color: #5c940d;
`;

export const LabelCa = styled(Label)`
  color: #e67700;
`;

export const LabelFa = styled(Label)`
  color: #2b8a3e;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;

export const DataInput = styled.input`
  border-radius: 8px;
  text-align: center;
  border-style: groove;
  appearance: none;
  background-color: transparent;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  height: 20px;
  z-index: 1;
`;

export const InsulinSelect = styled.select`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 1.8rem;
  margin-top: 0.7rem;
  color: #364fc9;
`;

export const InsulinOption = styled.option`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;

export const FactorSelect = styled.div`
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  height: 1.7rem;
  color: #364fc9;
`;

export const FactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  padding-top: 0.4rem;
  color: #5c940d;
  background: transparent;
`;

export const InsulinUnits = styled.li`
  color: #364fc7;
  background-color: beige;
  border-radius: 8px;
  display: grid;
  text-align: center;
  padding-top: 2vh;
  height: 4rem;
  position: inherit;
  z-index: 1;
  opacity: 0.75;
`;

export const EntryForm = styled.form`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  align-content: start;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
`;

export const EmptyInject = styled(Img)`
  margin-left: 12rem;
  margin-top: -1.2rem;
`;

export const FullInject = styled(Img)`
  margin-left: 1rem;
  margin-top: -3rem;
`;

export const BloodDrop = styled(Img)`
  margin-left: 1rem;
  margin-top: -3rem;
  height: 1.8rem;
  width: 1.5rem;
`;

export const Blood = styled(Img)`
  margin-left: 11rem;
  margin-top: -2.2rem;
  padding-right: 0.5rem;
  height: 2rem;
  width: 3rem;
`;

export const Carbohydrates = styled(Img)`
  margin-left: 0.5rem;
  margin-top: -3rem;
  height: 1.5rem;
  width: 1.5rem;
`;

export const Donut = styled(Img)`
  margin-left: 11.5rem;
  margin-top: -1rem;
  height: 2rem;
  width: 2rem;
`;
