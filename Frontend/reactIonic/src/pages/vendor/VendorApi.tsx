import Vendor from "./Vendor";

let url=process.env.REACT_APP_API+'proveedores';

export async function searchVendors(){
    let response=await fetch(url,{
        "method": 'GET',
        "headers":{
            "content-type": "application/"
        }        
    })
    return response.json();
}

export async function removeVendor(id:string){
    let response=await fetch(url+'/'+id,{
        "method": 'DELETE',
        "headers":{
            "content-type": "application"
        }
    });
}

export async function saveVendor(vendor:Vendor){
    let response=await fetch(url,{
        "method": 'POST',
        "body": JSON.stringify(vendor),
        "headers":{
            "content-type": "application"
        }      
    });
}

export async function searchVendorById(id:string){
    let response=await fetch(url+'/'+id,{
        "method": 'GET',
        "headers":{
            "content-type": "application"
        }
    });
    return response.json();
}