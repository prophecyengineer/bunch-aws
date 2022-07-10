import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

const CreateUsername: React.FC = () => {
  const [slugs, setSlugs] = useState([]);
  const [userSlug, setuserSlug] = useState("");

  const getSlug = (x) => <IonButton key={x.slug}>{x.slug}</IonButton>;

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons>
              <IonBackButton defaultHref="/settings"></IonBackButton>
            </IonButtons>
            <IonTitle>Choose a Username</IonTitle>
          </IonToolbar>
        </IonHeader>
        i want {userSlug}
        <IonList>
          <IonItem>
            <IonInput
              value={userSlug}
              onIonChange={(e) => setuserSlug(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={async () => {
            // await DataStore.save(
            //   new Slugs({
            //     slug: userSlug,
            //   })
            // );

            await API.graphql({
              query: mutations.createSlugs,
              variables: {
                input: {
                  slug: userSlug,
                },
              },
              authMode: "AMAZON_COGNITO_USER_POOLS",
            });
          }}
        >
          Create
        </IonButton>
        {slugs.map(getSlug)}
      </IonContent>
    </IonPage>
  );
};

export default CreateUsername;
