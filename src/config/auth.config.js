// import { isPlatform } from '@ionic/react';

// export const domain = 'dev-cbon33ssw5qzfg7u.us.auth0.com';
// export const clientId = '7c8AVm6JWJ6At20fyYZUlBfYNeYBrMfF';
// const appId = 'com.anonymous.insulinapp.auth0';

// // Use `auth0Domain` in string interpolation below so that it doesn't
// // get replaced by the quickstart auto-packager
// const auth0Domain = domain;
// const iosOrAndroid = isPlatform('hybrid');

// export const callbackUri = iosOrAndroid
//   ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
//   : 'http://localhost:3000';

import { Capacitor } from '@capacitor/core';
// import { isPlatform } from "@ionic/react";

// Auth0-Konfigurationswerte
export const domain = 'dev-cbon33ssw5qzfg7u.us.auth0.com';
export const clientId = '7c8AVm6JWJ6At20fyYZUlBfYNeYBrMfF';
const appId = 'com.anonymous.insulinapp';

// Bestimmen, ob die App auf iOS oder Android läuft
const iosOrAndroid = Capacitor.isNativePlatform();

// Rückruf-URI abhängig von der Plattform (Hybrid oder Web)
export const callbackUri = iosOrAndroid
  ? `${appId}.auth0://${domain}/capacitor/${appId}/callback`
  : 'http://localhost:3000';
