import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitchButton() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    // <Wrapper>
    <ToggleButton onClick={toggleLanguage}>
      <FlagContainer>
        <FlagIcon selected={currentLanguage === 'en'}>🇺🇸</FlagIcon>
        <FlagIcon selected={currentLanguage === 'de'}>🇩🇪</FlagIcon>
      </FlagContainer>
    </ToggleButton>
    // </Wrapper>
  );
}

// const Wrapper = styled.div`
//   z-index: 10;
// `;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: relative;
`;

const FlagContainer = styled.div`
  display: flex;
  position: absolute;
  top: -1.5rem;
  left: ${({ selected }) => (selected ? '0' : '50%')};
  transition: left 1s ease-in-out;
`;

const FlagIcon = styled.span`
  font-size: 24px;
  opacity: ${({ selected }) => (selected ? '1' : '0.5')};
  margin: 0 5px;
`;
