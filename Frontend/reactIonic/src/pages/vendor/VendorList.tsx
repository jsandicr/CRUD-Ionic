import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Vendor from './Vendor';
import { removeVendor, searchVendors } from './VendorApi';

const VendorList: React.FC = () => {

  const [vendors,setVendors] = useState<Vendor[]>([]);  
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[history.location.pathname]);

  const search = async () => {
    let result = await searchVendors();
    setVendors(result);
  }

  const remove = async (id:string) => {
    await removeVendor(id);
    await search();
  }

  const addCustomer=()=>{
    history.push('/page/vendor/new');
  }

  const editCustomer=(id:string)=>{
    history.push('/page/vendor/'+id);
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
            <IonTitle>Gestion Vendedores</IonTitle>
            <IonItem>
                <IonButton color="primary" fill="solid" slot="end" size="default" onClick={addCustomer}>
                    <IonIcon icon={add}/>
                    Agregar Vendedor
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

                {vendors.map((vendor:Vendor)=>
                    <IonRow>
                        <IonCol>{vendor.nombre}</IonCol>
                        <IonCol>{vendor.apellidos}</IonCol>
                        <IonCol>{vendor.email}</IonCol>
                        <IonCol>{vendor.telefono}</IonCol>
                        <IonCol>
                            <IonButton onClick={()=>editCustomer(String(vendor.id))} color="primary" fill="clear">
                                <IonIcon icon={pencil} slot="icon-only"/>
                            </IonButton>
                            <IonButton onClick={()=>remove(String(vendor.id))} color="danger" fill="clear">
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

export default VendorList;