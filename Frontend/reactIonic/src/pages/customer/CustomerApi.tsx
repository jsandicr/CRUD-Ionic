import Customer from "./Customer";

let url=process.env.REACT_APP_API+'clientes'

export async function searchCustomers(){
    let response=await fetch(url,{
        "method":'GET',
        "headers":{
            "content-type": "application/json"
        }
    });
    return response.json();
}

export async function removeCustomer(id:string){
    let response=await fetch(url+'/'+id,{
        "method":'DELETE',
        "headers":{
            "content-type": "application/json"
        }
    });
}

export async function saveCustomer(customer:Customer){
    let repsonse=await fetch(url,{
        "method":'POST',
        "body":JSON.stringify(customer),
        "headers":{
            "content-type": "application/json"
        }
    });
}

export async function searchCustomerById(id:string){
    let response=await fetch(url+'/'+id,{
        "method":'POST',
        "headers":{
            "content-type": "application/json"
        }
    });
    return response.json();
}