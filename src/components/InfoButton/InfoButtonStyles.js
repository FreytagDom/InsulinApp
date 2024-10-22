import styled from 'styled-components';
// import Image from 'next/image';
import { Img } from 'react-image';

export const InfoButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  margin-top: 1vh;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;

export const InfoCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  background: linear-gradient(58deg, #09203f, #537895);
  color: azure;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  @media (max-width: 768px) {
    width: 260px;
  }
`;

export const Icon = styled(Img)`
  height: 2.8rem;
  margin-top: -1rem;
`;

export const InfoList = styled.ul`
  margin-left: -0.3rem;
`;

export const List = styled.li`
  padding-bottom: 0.3rem;
`;

export const EmailButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
  outline: none !important;
  cursor: pointer;
  bottom: 2rem;
  color: aliceblue;
`;

export const Email = styled(Img)`
  z-index: 3;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 5px;
`;

export const ContacWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  max-width: 25rem;
  align-content: center;
  padding-left: 2rem;
  align-items: center;
  justify-items: center;
`;
