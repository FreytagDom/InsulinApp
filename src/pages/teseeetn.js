import styled from 'styled-components';
import Input from '../components/HomeInput/HomeInput';
// import LoginPage from '../components/Login/Login';
import DeleteUserDataButton from '../components/DeleteUserData/DeleteUserData';
import InfoButton from '../components/InfoButton/InfoButton';
import i18n from '../components/LanguageSwitcher/i18n';
import {  useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/Login/Loggout';
import LoginButton from '../components/Login/Login';
import { domain as auth0Domain, clientId, callbackUri } from "./auth.config";
import DataInjected from './savedInsulinData';

export default function Home() {
  // const { data: session } = useSession();
  const { isAuthenticated, user } = useAuth0();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };


  return (
    <>
    <Auth0Provider
    domain={auth0Domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: callbackUri
    }}
    // For using Auth0-React with Ionic on Android and iOS,
    // it's important to use refresh tokens without the fallback
    useRefreshTokens={true}
    useRefreshTokensFallback={false}>
      <Wrapper>
        <InfoButton />
        <Sign>
          {isAuthenticated ? (
            <>
              <Login>
                <DeleteUserDataButton />
                Hallo {'  '}
                {user.name}
              </Login>{' '}
              {'  '}
              {/* <Atags href="#" onClick={signOut}>
                <GoSignOut />
              </Atags> */}
              <LogoutButton />
              <Input />
              <DataInjected isAuthenticated={isAuthenticated} user={user} />
            </>
          ) : (
            <>
              <LoginButton />
              {/* <LoginPage /> */}
              {/* <TestLogin href="#" onClick={() => signIn('credentials')}>
                Test Anmelden
              </TestLogin> */}
            </>
          )}
        </Sign>
      </Wrapper>
      </Auth0Provider>
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

// const Atags = styled.a`
//   display: flex;
//   color: sandybrown;
//   justify-content: end;
//   text-align: center;
//   margin: -1.3rem 0.2rem 0.3rem 0.1rem;
//   padding: 0.3rem 0.1rem 0rem 0.3rem;
//   font-size: 1rem;
// `;

// const TestLogin = styled.a`
//   font-size: 1.3rem;
//   color: green;
//   justify-content: space-evenly;
// `;
