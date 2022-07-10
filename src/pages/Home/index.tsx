import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterContext,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as queries from "../../graphql/queries";
import { API } from "aws-amplify";
import { logoBuffer } from "ionicons/icons";
import { useContext, useEffect } from "react";
import { ListSlugssQuery } from "../../API";
import { GraphQLResult } from "@aws-amplify/api";

import "./Home.css";
import { Authenticator } from "@aws-amplify/ui-react";

const Home: React.FC = () => {
  const ionRouter = useContext(IonRouterContext);

  useEffect(() => {
    (async () => {
      // const models = await DataStore.query(Slugs);
      const apiSlugs = (await API.graphql<{ ListSlugss }>({
        query: queries.listSlugss,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as GraphQLResult<ListSlugssQuery>;
      console.log("apiSlugs", apiSlugs);
      const slugs = apiSlugs?.data?.listSlugss?.items;
      if (slugs.length > 0) {
        ionRouter.push("/home");
      } else {
        ionRouter.push("/onboarding/create-username");
      }
    })();
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
