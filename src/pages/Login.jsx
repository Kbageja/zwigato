import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';


const Login= () => {
  const {IsAuthenticated,setIsAuthenticated}  =useContext(Context);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  

  const handleSubmit = async(e) => {
    e.preventDefault();
   
     try {
      const {data}  = await axios.post(`${server}/user/login`,{
        email,password,},{
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true,
        })
        console.log(data)
        toast.success(data.message)
        setIsAuthenticated(true);
        setemail("");
        setpassword("");

      
     } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      console.log(error);
      
     }
  };
if(IsAuthenticated) return <Navigate to={ "/"}/>
  return (
    <>

    <div className="applogin">
    <div className="blur-backgroundlogin"></div>
    <div className="contact-form-container form-container-login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          required
        />

        <label htmlFor="message">Password</label>
        <input
        type='password'
          id="password"
          name="password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          required
        ></input>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    
    </>
    
  );
};

export default Login;
