import { isPlatform } from "@ionic/react";

// export const domain = "dev-cbon33ssw5qzfg7u.us.auth0.com";
// export const clientId = "7c8AVm6JWJ6At20fyYZUlBfYNeYBrMfF";
// const appId = "com.auth0.samples";
export const domain = 'dev-cbon33ssw5qzfg7u.us.auth0.com';
export const clientId = '7c8AVm6JWJ6At20fyYZUlBfYNeYBrMfF';
const appId = 'com.anonymous.insulinapp';

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

// export const callbackUri = iosOrAndroid
//   ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
//   : 'http://localhost:3000';
export const callbackUri = iosOrAndroid
  ? `${appId}.auth0://${auth0Domain}/capacitor/${appId}/callback`
  : 'https://insulinapp.de/callback';