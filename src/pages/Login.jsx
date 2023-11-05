import React, { useState } from 'react';
import { Navigate, useNavigate, useSearchParams,useLoaderData } from 'react-router-dom';
import { loginUser } from '../components/api';
import { requireAuth } from '../components/util';

const Login = () => {
     const [searchParam,setSearchParam] = useSearchParams()
     const message = searchParam.get('message')
     const navigate =useNavigate()
     let [loginMssg,setLoginMssg]=useState('')
     let [formStatus,setFormStatus]=useState('')
     const[formData,setFormData] =React.useState({
          email: '',
          password: ''
     })

     function handleChange(e) {
          setLoginMssg('')
          let {name,value}=e.target
          setFormData(prevData=>({
               ...prevData,
               [name]:value
          }))
     }

     function handleSubmit(e) {
          e.preventDefault()
          setFormStatus('submitting')
          // setSearchParam('')
          // console.log(formData);
          loginUser(formData)
          .then(res=>{
               navigate("/host",{replace:true})
          })
          .catch(err=>{
               setLoginMssg(err.message)
          })
          .finally(()=>{
               setFormStatus('')

          })
          // setFormData({
          //      email: '',
          //      password: ''
          // })


     }
     return (
          <div className='main text-center d-flex  flex-column justify-content-center '>
               {message &&
                    <div className="alert alert-warning alert-dismissible fade show text-start  text-capitalize " role="alert">
                         {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
               }
               {loginMssg &&
                    <div className='alert alert-danger alert-dismissible fade show text-start  text-capitalize'  role="alert">
                         {loginMssg}
                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
               }
               <h2 className='mb-4 mt-2'>Sign in to your account</h2>
               <form  onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={formData.email} className='form-control mb-3' type="email" name="email" placeholder="Enter Email" />
                    <input onChange={handleChange} value={formData.password} className='form-control' type="password" name="password" placeholder="Enter Password" />
                    <button className='btn btn-primary mt-4 px-4' disabled={formStatus}>
                         {formStatus?
                         (<span><span className='me-2 '>Logging In</span><i className="fa-solid fa-spinner"></i></span>)
                         :'Log in'}
                    </button>
               </form>
          </div>
     );
};

export default Login;