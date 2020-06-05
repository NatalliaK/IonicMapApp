import React from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './loginPage.scss';

const LoginPage: React.FC = () => {
  const history = useHistory();

  function logInEvent(e: React.MouseEvent): void {
    e.preventDefault();
    history.push('/map');
  }

  return (
    <IonPage>
      <div className="login-form">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <h1 className="ion-text-center ion-text-uppercase conduit-title login-form-title">
                Войти <br />
                <span className="login-form-title-small">с помощью портала Госуслуг</span>
              </h1>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol>
                <IonItem>
                  <IonInput type="email" placeholder="Введите email" />
                </IonItem>
                <IonItem>
                  <IonInput type="password" placeholder="Пароль" />
                </IonItem>
                <IonButton
                  className="ion-text-uppercase login-form-btn"
                  color="light"
                  expand="block"
                  onClick={logInEvent}
                >
                  Войти
                  <IonIcon className="ion-padding-left btn-icon" slot="end" icon="./assets/svg/gos_Logo.svg" />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default LoginPage;
