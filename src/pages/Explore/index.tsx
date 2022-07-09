import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import { DataStore } from "@aws-amplify/datastore";
import { ListSlugssQuery } from "../../API";
import "./Explore.css";
import { useEffect } from "react";
import { useState } from "react";
import { GraphQLResult } from "@aws-amplify/api";

import { API } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

import { text } from "ionicons/icons";

const Explore: React.FC = () => {
  const [slugs, setSlugs] = useState([]);
  const [userSlug, setuserSlug] = useState("");

  useEffect(() => {
    (async () => {
      // const models = await DataStore.query(Slugs);
      const apiSlugs = (await API.graphql<{ createFolder }>({
        query: queries.listSlugss,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as GraphQLResult<ListSlugssQuery>;
      console.log("apiSlugs", apiSlugs);

      const slugsTpSave = apiSlugs.data.listSlugss.items;
      setSlugs(slugsTpSave);
    })();
  }, []);

  const getSlug = (x) => <IonButton key={x.slug}>{x.slug}</IonButton>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
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
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Explore;
