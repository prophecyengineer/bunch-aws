import { Authenticator } from "@aws-amplify/ui-react";
import {
  //   IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Hub, DataStore } from "aws-amplify";
import { useEffect } from "react";
import ExploreContainer from "../../components/ExploreContainer";

const SignUp: React.FC = () => {
  useEffect(() => {
    Hub.listen("auth", async (data) => {
      if (data.payload.event === "signOut") {
        await DataStore.clear();
      }
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Authenticator initialState="signUp">
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
