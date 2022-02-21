import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Vendor from './Vendor';
import { saveVendor, searchVendorById } from './VendorApi';


const VendorEdit: React.FC = () => {

  const [vendor,setVendor] = useState<Vendor>({});

  const { name, id } = useParams<{ name: string; id: string;}>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[]);

  const search = async () => {
    if(id!=='new') {
      let result= await searchVendorById(id);
      setVendor(result);
    }
  }

  const save=()=>{
    saveVendor(vendor);
    history.push('/page/vendors');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent>
        <IonCard>
            <IonTitle>{id==='new' ? 'Agregar Vendedor' : 'Editar Vendedor'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e=>vendor.nombre=String(e.detail.value)} value={vendor.nombre}></IonInput>
                </IonItem>
              </IonCol>
            
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Apellidos</IonLabel>
                    <IonInput onIonChange={e=>vendor.apellidos=String(e.detail.value)} value={vendor.apellidos}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Correo</IonLabel>
                      <IonInput onIonChange={e=>vendor.email=String(e.detail.value)} value={vendor.email}></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Telefono</IonLabel>
                      <IonInput onIonChange={e=>vendor.telefono= String(e.detail.value)} value={vendor.telefono}> </IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            <IonItem>
                <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                    <IonIcon icon={checkmark}/>
                    Guardar
                  </IonButton>
            </IonItem>  
        </IonCard>  

      </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default VendorEdit;