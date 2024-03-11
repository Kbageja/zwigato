import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
export const server = "http://localhost:5000"
export const Context = createContext({IsAuthenticated:false});



const Appwrapper =()=>{
  const [IsAuthenticated,setIsAuthenticated]  = useState(false);
  const [user,setuser] = useState({});
  return(
  <Context.Provider value ={{IsAuthenticated,setIsAuthenticated
  ,user,setuser}}>
 
  <App/>

  </Context.Provider>
  );
 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>,
)
