// import Image from 'next/image';
import { Img } from 'react-image';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Navbar } from './NavBar/NavBar';
import bloodsugarvertical from '../public/bloodsugarvertical.jpg';
import happyBlooddrop from '../public/happyBlooddrop.png';
import { useAuth0 } from '@auth0/auth0-react';

export default function Layout({ children }) {
  // const { data: session } = useSession();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <>
          <ImageBackGround>
            <Img
              src={bloodsugarvertical}
              alt="bloodsugar"
              layout="fill"
              objectFit="cover"
            />
          </ImageBackGround>
        </>
      ) : (
        <>
          <ImageBackGround>
            <Img
              src={happyBlooddrop}
              alt="happyBlooddrop"
              layout="fill"
              objectFit="cover"
            />
          </ImageBackGround>
        </>
      )}
      <Header />
      <main>{children}</main>
      <Navbar />
      <Footer />
    </>
  );
}

const ImageBackGround = styled.span`
  background-attachment: scroll;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`;
