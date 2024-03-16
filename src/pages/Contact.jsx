import React, { useContext, useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
const Contact= () => {
  const {IsAuthenticated,setIsAuthenticated}  =useContext(Context);
 

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
 
const handlenamechange  = async()=>{
  const response = await axios.get(`${server}/user/me`,{withCredentials:true,})
  console.log(response.data.user.name);
  setname(response.data.user.name)
}
const handleemailchange  = async()=>{
  const response = await axios.get(`${server}/user/me`,{withCredentials:true,})
  console.log(response.data.user.email);
  setemail(response.data.user.email)
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!IsAuthenticated){
      toast.error("login first ")
      return(<Navigate to  = {"/login"}/>)
    }
    console.log(name,email,message);

     try {
      const {data}  = await axios.post(`${server}/usercontact/contact`,{
        name,email,message,},{
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true,
        })
        
        toast.success(data.message)
        setemail("");
        setname("");
        setmessage("");
        throw(data);

      
     } catch(data) {
      toast.error(data.response.data.message);
      
      console.log(error);
      
     }
  };

  return (
    <>

    <div className="applogin">
    <div className="blur-backgroundlogin"></div>
    <div className="contact-form-container form-container-login">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          // value={name}
          defaultValue={handlenamechange}
          onChange={handlenamechange}
          
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          // value={email}
          defaultValue={handleemailchange}
          onChange={handleemailchange}
          
        /> */}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e)=>setmessage(e.target.value)}
          
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    
    </>
    
  );
};

export default Contact;
