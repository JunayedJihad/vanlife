import { redirect } from "react-router-dom";

export async function authorize(){
     let isLoggedIn = true
     if(!isLoggedIn){
          throw redirect('/login');
     }
}