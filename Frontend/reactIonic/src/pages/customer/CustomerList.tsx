import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Customer from './Customer';
import { removeCustomer, searchCustomers } from './CustomerApi';

const CustomerList: React.FC = () => {

  const [clientes,setClientes] = useState<Customer[]>([]);  
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[history.location.pathname]);

  const search = async () => {
    let result = await searchCustomers();
    setClientes(result);
  }

  const remove = async (id:string) => {
    await removeCustomer(id);
    await search();
  }

  const addCustomer=()=>{
    history.push('/page/customer/new');
  }

  const editCustomer=(id:string)=>{
    history.push('/page/customer/'+id);
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
              <IonTitle>Gestion Clientes</IonTitle>
              <IonItem>
                  <IonButton color="primary" fill="solid" slot="end" size="default" onClick={addCustomer}>
                      <IonIcon icon={add}/>
                      Agregar Cliente
                      </IonButton>
              </IonItem>  
              <IonGrid className="table">
                  <IonRow>
                      <IonCol>Nombre</IonCol>
                      <IonCol>Apellidos</IonCol>
                      <IonCol>Correo</IonCol>
                      <IonCol>Telefono</IonCol>
                      <IonCol>Acciones</IonCol>
                  </IonRow>

                  {clientes.map((cliente:Customer)=>
                      <IonRow>
                          <IonCol>{cliente.nombre}</IonCol>
                          <IonCol>{cliente.apellidos}</IonCol>
                          <IonCol>{cliente.email}</IonCol>
                          <IonCol>{cliente.telefono}</IonCol>
                          <IonCol>
                              <IonButton onClick={()=>editCustomer(String(cliente.id))} color="primary" fill="clear">
                                  <IonIcon icon={pencil} slot="icon-only"/>
                              </IonButton>
                              <IonButton onClick={()=>remove(String(cliente.id))} color="danger" fill="clear">
                                  <IonIcon icon={close} slot="icon-only"/>
                              </IonButton>
                          </IonCol>
                      </IonRow> 
                  )}
                  
              </IonGrid>
          </IonCard>  
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;