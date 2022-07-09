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
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
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
import SignUp from "./pages/SignUp";
import Notification from "./pages/Notification";
import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
/* Core CSS required for Ionic components to work properly */

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/explore">
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
          {/* <IonTabButton tab="notification" href="/notification">
            <IonIcon icon={notificationsOutline} />
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default withAuthenticator(App);
