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

export async function loginUser(creds) {
     const response = await fetch("/api/login",
         { method: "post", body: JSON.stringify(creds) }
     )
     const data = await response.json()

     if (!response.ok) {
         throw {
             message: data.message,
             statusText: response.statusText,
             status: response.status
         }
     }

     return data
 }