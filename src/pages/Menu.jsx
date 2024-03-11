import React, { createContext, useContext, useState } from 'react';
import "../styles/menu.css"
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
export default function Menu() {
  const {IsAuthenticated,setrefresh} = useContext(Context);
   
  const handleaddtocart = async(productname,Price)=>{

    try{
    if (!IsAuthenticated) {
      toast.error("To add to cart  you have to login first")
      return (<Navigate to={"/login"} />);
    }
    const {data}  = await axios.post(`${server}/userproduct/product`,{
      productname,Price},{
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
  return (<>
  <div className='menubody'>

    <p className='titlemenu'>Burger's</p>
    <hr />
    <div className="foodgrid">
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top5.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Veg Burger</h4>
    <p class="card-text">crispy burger with creamy sauce and lettuce</p>
    <p className="card-text price">50₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Veg Burger",50)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Maharja jr Burger</h4>
    <p class="card-text">crispy burger patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">120₹</p>
    <button class="btn btn-warning" type='submit'onClick={()=>{handleaddtocart("Maharja jr Burger",120)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Maharaja Burger</h4>
    <p class="card-text">crispy burger patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">190₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Maharaja Burger",190)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top6.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Classic Cheese Burger</h4>
    <p class="card-text">cheesy burger with cheesy sauce and lettuce and onions</p>
    <p className="card-text price">160₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Classic Cheese Burger",160)}}>Add to Cart</button>
  </div>
</div>
</div>
    </div>
  <div className='menubody'>

    <p className='titlemenu'>Wraps's</p>
    <hr />
    <div className="foodgrid">
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Veg Wrap</h4>
    <p class="card-text">soft Wrap with creamy sauce and lettuce</p>
    <p className="card-text price">85₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Veg Wrap",85)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Classic Wrap</h4>
    <p class="card-text">crispy aloo patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">70₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Classic Wrap",70)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Paneer Wrap</h4>
    <p class="card-text">crispy paneer patty with mayonaise and lettuce</p>
    <p className="card-text price">190₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Paneer Wrap",190)}}>Add to Cart</button>
  </div>
</div>
<div class="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body card-bodymenu">
    <h4 class="card-title">Classic Cheese Wrap</h4>
    <p class="card-text">cheesy Patty with cheesy sauce and lettuce and onions</p>
    <p className="card-text price">210₹</p>
    <button class="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Classic Cheese Wrap",210)}}>Add to Cart</button>
  </div>
</div>
</div>

      
    
    </div>
    </>
  );
}
