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
  IonList,
  IonContent,
  IonToolbar,
  IonTitle,
  IonNav,
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
import Home from "../../pages/Home";
import Explore from "../../pages/Explore";
import Add from "../../pages/Add";
import Profile from "../../pages/Profile";
import Chat from "../../pages/Chat";
import Notification from "../../pages/Notification";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
/* Core CSS required for Ionic components to work properly */

setupIonicReact();

const ThumbNavigation = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}

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
  );
};

export default ThumbNavigation;
