import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Customer from './Customer';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';

const CustomerEdit: React.FC = () => {

  const [customer,setCustomer] = useState<Customer>({});

  const { name, id } = useParams<{ name: string; id: string;}>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[]);

  const search = async () => {
    if(id!=='new') {
      let result=await searchCustomerById(id);
      setCustomer(result);
    }
  }

  const save= async()=>{
    await saveCustomer(customer);
    history.push('/page/customers');
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
            <IonTitle>{id==='new' ? 'AgregarCliente' : 'EditarCliente'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e=>customer.nombre=String(e.detail.value)} value={customer.nombre}></IonInput>
                </IonItem>
              </IonCol>
            
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Apellidos</IonLabel>
                    <IonInput onIonChange={e=>customer.apellidos=String(e.detail.value)} value={customer.apellidos}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Correo</IonLabel>
                      <IonInput onIonChange={e=>customer.email=String(e.detail.value)} value={customer.email}></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Telefono</IonLabel>
                      <IonInput onIonChange={e=>customer.telefono= String(e.detail.value)} value={customer.telefono}> </IonInput>
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

export default CustomerEdit;