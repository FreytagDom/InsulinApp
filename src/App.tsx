import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { App as CapApp } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { useAuth0 } from "@auth0/auth0-react";
import { callbackUri } from "./auth.config";
import Home from "./pages/Home"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect } from "react";
import { Navbar } from "./components/NavBar/NavBar";
import DataInjected from "./pages/savedInsulinData";
import PrivateRoute from "./components/PrivateRoute";
import CorrectionFactorPage from "./pages/correctionFactor";
import happyBlooddrop from './public/happyBlooddrop.png'
import CreateFactor from "./pages/setInsulinFactor";
import CorrectionFactor from "./components/SetCorrectionFactor/SetCorrectionFactor";
import InsulinFactorPage from "./pages/insulinFactor";


setupIonicReact({
  mode: "md",
});

const App: React.FC = () => {
  const { handleRedirectCallback } = useAuth0();

  useEffect(() => {
    CapApp.addListener("appUrlOpen", async ({ url }) => {
      if (url.startsWith(callbackUri)) {
        if (
          url.includes("state") &&
          (url.includes("code") || url.includes("error"))
        ) {
          await handleRedirectCallback(url);
        }

        await Browser.close();
      }
    });
  }, [handleRedirectCallback]);
  // const elementStyle = {
  //   zIndex: 10
  // };
  return (
    <IonApp  style={{ 
      backgroundImage: `url(${happyBlooddrop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
      <IonReactRouter>
     
      <IonRouterOutlet style={{ maxHeight: '100vh',
  overflowY: 'auto', marginBottom: '10vh'}} >
  <Route exact path="/Home">
    <Home />
  </Route>
  <PrivateRoute exact path="/insulinFactor">
    <InsulinFactorPage />
  </PrivateRoute>
  <PrivateRoute exact path="/correctionFactor">
    <CorrectionFactorPage />
  </PrivateRoute>
  <PrivateRoute exact path="/savedInsulinData">
    <DataInjected />
  </PrivateRoute>
  <Route exact path="/">
    <Redirect to="/Home" />
  </Route>
</IonRouterOutlet>
<Navbar />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
