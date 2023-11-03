import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { loginUser } from '../components/api';

const Login = () => {
     const [searchParam,setSearchParam] = useSearchParams()
     const message = searchParam.get('message')
     let [loginMssg,setLoginMssg]=useState('')
     let[loginStatus,setLoginStatus]=useState(false)
     let [formStatus,setFormStatus]=useState('')
     let [buttonText,setButtonText]=useState('Log in')


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
          setSearchParam('')
          // console.log(formData);
          loginUser(formData)
               .then(res=>{
                    console.log(res)
                    setLoginStatus(true)
                    setFormStatus('')
                    setLoginMssg(`Welcome ${res.user.name} ; ${res.token}`)
                    setButtonText('Log Out')
               })
               .catch(err=>{
                    // console.log(err.message)
                    setLoginMssg(err.message)
                    setButtonText('Log In')
                    setFormStatus('')
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
                    {!formStatus && <button className='btn btn-primary mt-4 px-4 '>{buttonText}</button> }
               </form>
          </div>
     );
};

export default Login;