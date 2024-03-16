import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
export const server = "http://localhost:5000"
export const Context = createContext({IsAuthenticated:false});



const Appwrapper =()=>{
  const [IsAuthenticated,setIsAuthenticated]  = useState(false);
  const [logout,setlogout] = useState(false);
  const [refresh,setrefresh] = useState(false)
  const [user,setuser] = useState({});
  const [number,setnumber] = useState()
  const handleaddtocart = async(order,price)=>{

    try{
    if (!IsAuthenticated) {
      toast.error("To add to cart  you have to login first")
      return (<Navigate to={"/login"} />);
    }
    const {data}  = await axios.post(`${server}/userorders/neworder`,{
      order,price},{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true,
      })
      console.log(data)
      toast.success("Added to Cart");
      setrefresh((prev)=>!prev)
   
  }
  catch(error){
    toast.error(error.data.response.message);
    console.log(error);
  }
    }
  return(
  <Context.Provider value ={{IsAuthenticated,setIsAuthenticated
  ,user,setuser,refresh,setrefresh,number,setnumber,handleaddtocart,logout,setlogout}}>
 
  <App/>

  </Context.Provider>
  );
 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>,
)
