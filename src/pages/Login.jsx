import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { loginUser } from '../components/api';

const Login = () => {
     const [searchParam,setSearchParam] = useSearchParams()
     const message = searchParam.get('message')
     let [loginMssg,setLoginMssg]=useState('')
     let[loginStatus,setLoginStatus]=useState(false)


     const[formData,setFormData] =React.useState({
          email: '',
          password: ''
     })
     function handleChange(e) {
          let {name,value}=e.target
          setFormData(prevData=>({
               ...prevData,
               [name]:value
          }))
     }
     function handleSubmit(e) {
          e.preventDefault()
          setSearchParam('')
          // console.log(formData);
          loginUser(formData)
               .then(res=>{
                    // console.log(res)
                    setLoginStatus(true)
                    setLoginMssg(res.token)
               })
               .catch(err=>{
                    // console.log(err.message)
                    setLoginMssg(err.message)
                    setLoginStatus(false)
               })
          setFormData({
               email: '',
               password: ''
          })
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
                    <div className={`alert ${loginStatus?`alert-success` :`alert-danger`} alert-dismissible fade show text-start  text-capitalize`}  role="alert">
                         {loginMssg}
                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
               }
               <h2 className='mb-4 mt-2'>Sign in to your account</h2>
               <form  onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={formData.email} className='form-control mb-3' type="email" name="email" placeholder="Enter Email" />
                    <input onChange={handleChange} value={formData.password} className='form-control' type="password" name="password" placeholder="Enter Password" />
                    <button className='btn btn-primary mt-4'>Log in</button>
               </form>
          </div>
     );
};

export default Login;