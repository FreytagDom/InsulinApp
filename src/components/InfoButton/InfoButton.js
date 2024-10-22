import { useState } from 'react';
import {
  InfoButtonContainer,
  Button,
  Icon,
  InfoCard,
  InfoList,
  List,
  EmailButton,
  Email,
} from './InfoButtonStyles';
import closeIcon from '../../public/closeIcon.svg';
import infoIcon from '../../public/infoIcon.svg';
import { useTranslation } from 'react-i18next';
import LanguageSwitchButton from '../LanguageSwitcher/LanguageSwitcherButton';
import EmailSend from '../../public/EmailSend.png';

export default function InfoButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:insulinapp@web.de';
  };

  const { t } = useTranslation();

  return (
    <InfoButtonContainer>
      <LanguageSwitchButton />
      <Button onClick={toggleCard}>
        {isOpen ? (
          <Icon src={closeIcon} alt="" />
        ) : (
          <Icon src={infoIcon} alt="" />
        )}
      </Button>
      {isOpen && (
        <InfoCard>
          <InfoList>
            <List>{t('listOne')}</List>
            <List>{t('listTwo')}</List>
            <List>{t('listThree')}</List>
            <List>{t('listFour')}</List>
            <List>{t('listFive')}</List>
          </InfoList>
          <EmailButton onClick={handleEmailButtonClick}>
            <Email src={EmailSend} alt="Email send"></Email>
            {t('contact')}
          </EmailButton>
        </InfoCard>
      )}
    </InfoButtonContainer>
  );
}
