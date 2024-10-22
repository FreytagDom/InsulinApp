import styled from 'styled-components';
// import Image from 'next/image';
import copyright2 from '../../public/copyright2.png';
import { Img } from 'react-image';

export default function Footer() {
  return (
    <FooterLine>
      <Img src={copyright2} alt="" />
      Created by FreyDom 2022
    </FooterLine>
  );
}

const FooterLine = styled.footer`
  max-height: 0.8rem;
  font-size: 0.6rem;
  color: #1aa1d8;
  display: flex;
  position: fixed;
  bottom: 5px;
  width: 100%;
`;
