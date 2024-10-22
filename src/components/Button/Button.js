import styled from 'styled-components';
// import Image from 'next/image';
import { Img } from 'react-image';

export default function LoginButton({ onClick, providerName, bgColor, icon }) {
  return (
    <StyledButton onClick={onClick} bgColor={bgColor}>
      <Img
        src={icon}
        alt={`${providerName} icon`}
        width="35px"
        height="35px"
      />
      <Textstyling>{providerName}</Textstyling>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  all: unset;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 90%;
  height: 3rem;
  background-color: ${({ bgColor }) => bgColor};
  filter: drop-shadow(0 0 0.1em var(--drop-shadow));
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const Textstyling = styled.p`
  padding-top: 0.3rem;
`;
