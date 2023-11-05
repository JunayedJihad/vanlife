import React, { useState } from 'react';
import {  useSearchParams, Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { loginUser } from '../components/api';

export async function action({request}){
     const formData= await request.formData()
     const pathName=new URL(request.url).searchParams.get('redirectTo')||'/host'

     const userData={
          email:formData.get('email'),
          password:formData.get('password')
     }
     try{
          const data=await loginUser(userData)
          localStorage.setItem('isLoggedIn', true);
          // console.log(data);
          let response= redirect(pathName);
          response.body=''
          return response
     }catch(err){
          console.log(err.message);
          return err.message
     }

}


const Login = () => {
     const [searchParam,setSearchParam] = useSearchParams()
     const message = searchParam.get('message')
     const navigation = useNavigation()
     const serverMssg=useActionData()
     // console.log(navigation);


     // function handleSubmit(e) {
     //      e.preventDefault()
     //      setFormStatus('submitting')
     //      // setSearchParam('')
     //      // console.log(formData);
     //      loginUser(formData)
     //      .then(res=>{
     //           navigate("/host",{replace:true})
     //      })
     //      .catch(err=>{
     //           setLoginMssg(err.message)
     //      })
     //      .finally(()=>{
     //           setFormStatus('')

     //      })



     // }

     return (
          <div className='main text-center d-flex  flex-column justify-content-center '>
               {message &&
                    <div className="alert alert-warning alert-dismissible fade show text-start  text-capitalize " role="alert">
                         {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
               }
               {serverMssg &&
                    <div className='alert alert-danger alert-dismissible fade show text-start  text-capitalize'  role="alert">
                         {serverMssg}
                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
               }
               <h2 className='mb-4 mt-2'>Sign in to your account</h2>
               <Form method='post' replace>
                    <input  className='form-control mb-3' type="email" name="email" placeholder="Enter Email" />
                    <input  className='form-control' type="password" name="password" placeholder="Enter Password" />
                    <button className='btn btn-primary mt-4 px-4' disabled={navigation.state==='submitting'} >
                    {navigation.state==='submitting'?(
                         <span><span className='me-2'>Logging In</span><i className="fa-solid fa-spinner"></i></span>
                    ):(

                         <span className='me-2 '>Log In</span>
                    )}
                    </button>
               </Form >
          </div>
     );
};

export default Login;