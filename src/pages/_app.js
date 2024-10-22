// import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { GlobalStyle } from '../components/GlobalStyle';
import Layout from '../components/Layout';
import Loading from '../components/PageLoader/PageLoader';
import { App as CapApp } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  domain as auth0Domain,
  callbackUri,
  clientId,
} from '../config/auth.config';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  const { handleRedirectCallback } = useAuth0();
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   CapApp.addListener('appUrlOpen', async ({ url }) => {
  //     if (url.startsWith(callbackUri)) {
  //       if (
  //         url.includes('state') &&
  //         (url.includes('code') || url.includes('error'))
  //       )
  //         try {
  //           await handleRedirectCallback(url);
  //         } catch (error) {
  //           console.error('Error handling Auth0 callback:', error);
  //         }
  //       await Browser.close();
  //     }
  //   });
  // }, [handleRedirectCallback]);

  useEffect(() => {
    CapApp.addListener('appUrlOpen', async ({ url }) => {
      if (
        url.includes('state') &&
        (url.includes('code') || url.includes('error'))
      )
        try {
          console.log('Processing Auth0 callback with URL:', url);
          await handleRedirectCallback(url);
          console.log('Auth0 callback successfully handled');
        } catch (error) {
          console.error('Error handling Auth0 callback:', error);
        } finally {
          await Browser.close(); // Close only after the callback has been processed
        }
    });
  }, [handleRedirectCallback]);

  const onRedirectCallback = (appState) => {
    const targetUrl = appState?.returnTo || '/';
    router.push(targetUrl);
    console.log(targetUrl);
  };

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Insulin App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Insulin app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* <SessionProvider session={session} basePath="/api/auth"> */}
      <Auth0Provider
        domain={auth0Domain}
        clientId={clientId}
        // domain="dev-cbon33ssw5qzfg7u.us.auth0.com"
        // clientId="7c8AVm6JWJ6At20fyYZUlBfYNeYBrMfF"

        authorizationParams={{
          redirect_uri:
            typeof window !== 'undefined'
              ? window.location.origin
              : callbackUri,
          //   : 'com.anonymous.insulinapp.auth0://dev-cbon33ssw5qzfg7u.us.auth0.com/capacitor/com.anonymous.insulinapp/callback',
        }}
        onRedirectCallback={onRedirectCallback}
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        cacheLocation="memory"
      >
        <GlobalStyle />
        <Layout>
          {isLoading ? <Loading /> : <Component {...pageProps} />}
        </Layout>
        {/* </SessionProvider> */}
      </Auth0Provider>
    </>
  );
}
