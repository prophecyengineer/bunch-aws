import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonMenu,
  IonHeader,
  IonItem,
  IonLabel,
  IonContent,
  IonToolbar,
  IonTitle,
  IonNav,
  IonButton,
  IonPage,
  IonList,
  IonInput,
  IonItemDivider,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  addCircleOutline,
  searchOutline,
  homeOutline,
  personOutline,
  chatbubbleOutline,
  notificationsOutline,
} from "ionicons/icons";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Notification from "./pages/Notification";
import { Amplify, Auth } from "aws-amplify";
import {
  Authenticator,
  CheckboxField,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import CreateUsername from "./pages/Onboarding/CreateUsername";
import { useState } from "react";
import SignUp from "./pages/Onboarding/SignUp";
Amplify.configure(awsExports);
/* Core CSS required for Ionic components to work properly */

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/onboarding/create-username">
              <CreateUsername />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
            </IonTabButton>
            <IonTabButton tab="explore" href="/explore">
              <IonIcon icon={searchOutline} />
            </IonTabButton>
            <IonTabButton tab="add" href="/add">
              <IonIcon icon={addCircleOutline} />
            </IonTabButton>
            <IonTabButton tab="chat" href="/chat">
              <IonIcon icon={chatbubbleOutline} />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personOutline} />
            </IonTabButton>
            <IonTabButton tab="notification" href="/notification">
              <IonIcon icon={notificationsOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
