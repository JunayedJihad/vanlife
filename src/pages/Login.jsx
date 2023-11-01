import React from 'react';

const Login = () => {
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
          console.log(formData);
          setFormData({
               email: '',
               password: ''
          })
     }
     return (
          <div className='main text-center d-flex  flex-column justify-content-center '>
               <h2 className='mb-5'>Sign in to your account</h2>
               <form  onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={formData.email} className='form-control mb-3' type="email" name="email" placeholder="Enter Email" />
                    <input onChange={handleChange} value={formData.password} className='form-control' type="password" name="password" placeholder="Enter Password" />
                    <button className='btn btn-primary mt-4'>Log in</button>
               </form>
          </div>
     );
};

export default Login;