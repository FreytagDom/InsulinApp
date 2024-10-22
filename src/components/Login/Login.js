import { useAuth0 } from '@auth0/auth0-react';
import { Browser } from '@capacitor/browser';
import { useState } from 'react';
import styled from 'styled-components';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      await loginWithRedirect({
        async openUrl(url) {
          // Nutzt Capacitors Browser Plugin für den Redirect
          await Browser.open({
            url,
            windowName: '_self',
          });
        },
      });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledButton onClick={login} disabled={loading}>
      {loading ? 'Logging in...' : 'Log in'}
    </StyledButton>
  );
};

export default LoginButton;

const StyledButton = styled.button`
  all: unset;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 90%;
  height: 3rem;
  background-color: gray;
  filter: drop-shadow(0 0 0.1em var(--drop-shadow));
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

// import styled from 'styled-components';
// import { signIn } from 'next-auth/react';
// import LoginButton from '../Button/Button';
// import githubSvg from '../../assets/github.svg';
// import googleLogoColor from '../../assets/googleLogoColor.svg';
// import facebook from '../../assets/facebook.svg';

// export default function LoginPage() {
//   return (
//     <>
//       <SingIn>
//         Wähle deinen <br /> Login aus.
//       </SingIn>
//       <LoginButtons>
//         <LoginButton
//           icon={googleLogoColor}
//           providerName="Google"
//           bgColor="#AA5437"
//           onClick={() => signIn('google')}
//         />
//         {/* <LoginButton
//           icon={facebook}
//           providerName="Facebook"
//           bgColor="#4050B5"
//           onClick={() => signIn('facebook')}
//         />   */}
//         <LoginButton
//           icon={githubSvg}
//           providerName="GitHub"
//           bgColor="#24292e"
//           onClick={() => signIn('github')}
//         />
//       </LoginButtons>
//     </>
//   );
// }

// const SingIn = styled.p`
//   justify-content: center;
//   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//   font-size: 2rem;
//   color: aquamarine;
//   font-weight: bold;
// `;

// const LoginButtons = styled.section`
//   margin-top: 4rem;
// `;

// // import { Browser } from '@capacitor/browser';
// // import { isPlatform } from '@ionic/react'; // Prüfen, ob die App auf einem mobilen Gerät läuft
// // import styled from 'styled-components';
// // import { signIn } from 'next-auth/react';
// // import LoginButton from '../Button/Button';
// // import githubSvg from '../../assets/github.svg';
// // import googleLogoColor from '../../assets/googleLogoColor.svg';

// // export default function LoginPage() {
// //   const handleLogin = (provider) => {
// //     if (isPlatform('capacitor')) {
// //       // Öffne OAuth Login in einem neuen Browser-Tab in der nativen App
// //       Browser.open({
// //         url: `https://your-app.com/api/auth/signin/${provider}`,
// //       });
// //     } else {
// //       // Web-Login
// //       signIn(provider);
// //     }
// //   };

// //   return (
// //     <>
// //       <SingIn>
// //         Wähle deinen <br /> Login aus.
// //       </SingIn>
// //       <LoginButtons>
// //         <LoginButton
// //           icon={googleLogoColor}
// //           providerName="Google"
// //           bgColor="#AA5437"
// //           onClick={() => handleLogin('google')}
// //         />
// //         <LoginButton
// //           icon={githubSvg}
// //           providerName="GitHub"
// //           bgColor="#24292e"
// //           onClick={() => handleLogin('github')}
// //         />
// //       </LoginButtons>
// //     </>
// //   );
// // }

// // const SingIn = styled.p`
// //   justify-content: center;
// //   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// //   font-size: 2rem;
// //   color: aquamarine;
// //   font-weight: bold;
// // `;

// // const LoginButtons = styled.section`
// //   margin-top: 4rem;
// // `;

// components/LoginButton.js
