export async function getVans(){
     let data=await fetch("/api/vans")
     if(!data.ok){
          throw {
               message:'Failed Loading Vans , Please try again later !',
               status:data.status,
               statusText:data.statusText
          }

     }
     data=await data.json()
     return data.vans
}