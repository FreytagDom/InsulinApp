import styled from 'styled-components';
import Input from '../components/HomeInput/HomeInput';
import DeleteUserDataButton from '../components/DeleteUserData/DeleteUserData';
import InfoButton from '../components/InfoButton/InfoButton';
import i18n from '../components/LanguageSwitcher/i18n';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/Login/Loggout';
import LoginButton from '../components/Login/Login';
import Header from '../components/Header/Header';
import { useState } from 'react';

export default function HomePage() {
  const { isAuthenticated, user } = useAuth0();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  console.log(isAuthenticated);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  console.log(handleChangeLanguage)

  return (
    <>
      <Wrapper>
        <Header />
        <InfoButton />
        <Sign>
          {isAuthenticated ? (
            <>
              <Login>
                <DeleteUserDataButton />
                Hallo {'  '}
                {user.name}
              </Login>{' '}

              <LogoutButton />
              <Input />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </Sign>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 80px;
  height: inherit;
  justify-content: center;
`;

const Login = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  color: orange;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const Sign = styled.span`
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  z-index: 2;
`;

