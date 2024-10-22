// components/LogoutButton.js
import { useAuth0 } from '@auth0/auth0-react';
import { Browser } from '@capacitor/browser';

const logoutUri =
  'com.anonymous.insulinapp.auth0://dev-cbon33ssw5qzfg7u.us.auth0.com/capacitor/com.anonymous.insulinapp/callback';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const doLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: logoutUri,
      },
      async openUrl(url) {
        await Browser.open({
          url,
          windowName: '_self',
        });
      },
    });
  };

  return <button onClick={doLogout}>Log out</button>;
};

export default LogoutButton;
