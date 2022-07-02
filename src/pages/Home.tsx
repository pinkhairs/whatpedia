import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { getReverseWords } from '../helpers/Dictionary';

const Home: React.FC = () => {
  getReverseWords('word');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
