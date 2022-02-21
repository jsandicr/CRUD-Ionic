import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, close } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './employee';
import { removeEmployee, searchEmployees } from './EmployeeApi';

const EmployeeList: React.FC = () => {

  const [employees,setEmployees] = useState<Employee[]>([]);  
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(()=>{
    search();
  },[history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setEmployees(result);
  }

  const remove = (id:string) => {
    removeEmployee(id);
    search();
  }

  const addEmployee=()=>{
    history.push('/page/employee/new');
  }

  const editEmployee=(id:string)=>{
    history.push('/page/employee/'+id);
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
            <IonTitle>Gestion Empleados</IonTitle>
            <IonItem>
                <IonButton color="primary" fill="solid" slot="end" size="default" onClick={addEmployee}>
                    <IonIcon icon={add}/>
                    Agregar Empleado
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

                {employees.map((employee:Employee)=>
                    <IonRow>
                        <IonCol>{employee.nombre}</IonCol>
                        <IonCol>{employee.apellidos}</IonCol>
                        <IonCol>{employee.email}</IonCol>
                        <IonCol>{employee.telefono}</IonCol>
                        <IonCol>
                            <IonButton onClick={()=>editEmployee(String(employee.id))} color="primary" fill="clear">
                                <IonIcon icon={pencil} slot="icon-only"/>
                            </IonButton>
                            <IonButton onClick={()=>remove(String(employee.id))} color="danger" fill="clear">
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

export default EmployeeList;