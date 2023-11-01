export async function getVans(url){
     let data=await fetch(url)
     if(!data.ok){
          throw {
               message:'Failed Loading Vans , Please try again !',
               status:data.status,
               statusText:data.statusText
          }

     }
     data=await data.json()
     return data.vans
}