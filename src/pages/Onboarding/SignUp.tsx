import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

import { API, Auth, Hub } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

const SignUp: React.FC = () => {
  const initialFormState = {
    username: "",
    password: "",
    email: "",
    authCode: "",
    formType: "signUp",
  };
  const [formState, updateFormState] = useState(initialFormState);
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [authCode, setAuthCode] = useState<string>();
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("user signed in");
          break;
        case "signOut":
          updateFormState(() => ({ ...formState, formType: "signUp" }));
          break;
        default:
          break;
      }
    });
  }
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user", user);
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } catch (err) {
      updateUser(null);
    }
  }
  function onChange(e) {
    e.persist();
    updateFormState(() => ({
      ...formState,
      username: username,
      email: email,
      password: password,
      authCode: authCode,
    }));
  }

  async function signUp() {
    console.log("formState", formState);

    // const { username, email, password } = formState;

    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
  }
  async function confirmSignUp() {
    // const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: "signIn" }));
  }
  async function signIn() {
    // const { username, password } = formState;
    await Auth.signIn(username, password);

    updateFormState(() => ({ ...formState, formType: "signedIn" }));
  }

  const { formType } = formState;
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {formType === "signUp" && (
            <>
              <IonItem>
                <IonInput
                  name="username"
                  value={username}
                  placeholder="Enter Username"
                  onIonChange={(e) => setUsername(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
                <IonButton onClick={onChange}>Update deets</IonButton>
                <IonButton onClick={signUp}> Sign Up</IonButton>
              </IonItem>
              <IonItemDivider />
              <IonItem>
                <IonButton
                  onClick={() =>
                    updateFormState(() => ({
                      ...formState,
                      formType: "signIn",
                    }))
                  }
                >
                  Sign In
                </IonButton>
              </IonItem>
            </>
          )}

          {formType === "confirmSignUp" && (
            <>
              <IonItem>
                <IonInput
                  name="authCode"
                  value={authCode}
                  placeholder="Enter Confirmation Code From EMail"
                  onIonChange={(e) => setAuthCode(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonButton onClick={confirmSignUp}>Confirm Email</IonButton>
              </IonItem>
            </>
          )}
          {formType === "signIn" && (
            <>
              <IonItem>
                <IonInput
                  name="username"
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  placeholder="username"
                />
              </IonItem>
              <IonItem>
                <IonInput
                  name="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  placeholder="password"
                />
              </IonItem>
              <IonItem>
                <IonButton onClick={signIn}>Sign in</IonButton>
              </IonItem>
            </>
          )}
          {formType === "signedIn" && (
            <div>
              <h2>welcome user</h2>
              <IonButton
                onClick={() => {
                  Auth.signOut();
                }}
              >
                Sign Out
              </IonButton>
            </div>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
