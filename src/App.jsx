import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './pages/navbar';
import Orders from './pages/Orders';
import Home from './pages/home';
import './App.css'
import Menu from './pages/Menu';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Login from './pages/Login';

import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context, server } from './main';



function App(){
const {setuser,setIsAuthenticated , IsAuthenticated}  =useContext(Context);
useEffect(()=>{
    const fetchuser = () =>{
    axios.get(`${server}/user/me`,{
        withCredentials:true,
  }).then(res=>{
    setuser(res.data.user);
    setIsAuthenticated(true);
  }).catch((error)=>{
    setuser({});
    setIsAuthenticated(false);
  })
}
fetchuser();
},[])


    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path = '/orders' element = {<Orders/>}/>
                <Route path = '/menu' element = {<Menu/>}/>
                <Route path = '/contact' element = {<Contact/>}/>
                <Route path = '/cart' element = {<Cart/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path = '/register' element = {<Signup/>}/>
            </Routes>
            <Toaster/>
        </Router>
        </>
    );

}
export default App;