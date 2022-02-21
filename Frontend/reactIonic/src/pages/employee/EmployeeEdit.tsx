import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './employee';
import { saveEmployee, searchEmployeeById } from './EmployeeApi';

const EmployeeEdit: React.FC = () => {

  const [employee,setEmployee] = useState<Employee>({});

  const { name, id } = useParams<{ name: string; id: string;}>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[]);

  const search = async () => {
    if(id!=='new') {
      let result=await searchEmployeeById(id);
      setEmployee(result);
    }
  }

  const save= async ()=>{
    await saveEmployee(employee);
    history.push('/page/employees');
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
            <IonTitle>{id==='new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e=>employee.nombre=String(e.detail.value)} value={employee.nombre}></IonInput>
                </IonItem>
              </IonCol>
            
              <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Apellidos</IonLabel>
                    <IonInput onIonChange={e=>employee.apellidos=String(e.detail.value)} value={employee.apellidos}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Correo</IonLabel>
                      <IonInput onIonChange={e=>employee.email=String(e.detail.value)} value={employee.email}></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">Telefono</IonLabel>
                      <IonInput onIonChange={e=>employee.telefono= String(e.detail.value)} value={employee.telefono}> </IonInput>
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

export default EmployeeEdit;