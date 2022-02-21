import Employee from "./employee";

let url=process.env.REACT_APP_API+'empleados';

export async function searchEmployees(){
    let response= await fetch(url,{
        "method":'GET',
        "headers":{
            "content-type": "application/json"
        }
    })
    return response.json();
}

export async function removeEmployee(id:string){
    let response=await fetch(url+'/'+id,{
        "method":'DELETE',
        "headers":{
            "content-type": "application/json"
        }
    })
}

export async function saveEmployee(employee:Employee){
    let response=await fetch(url,{
        "method":'POST',
        "body":JSON.stringify(employee),
        "headers":{
            "content-type": "application/json"
        }
    })
}

export async function searchEmployeeById(id:string){
    let response=await fetch(url+'/'+id,{
        "method":'GET',
        "headers":{
            "content-type": "application/json"
        }
    });
    return response.json();
}