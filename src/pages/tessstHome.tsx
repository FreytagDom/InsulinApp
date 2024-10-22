import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

import Input from "../components/HomeInput/HomeInput";

const Home: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>InsulinApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">InsulinApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          
          <Input />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
