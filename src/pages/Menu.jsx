import React, { createContext, useContext, useState } from 'react';
import "../styles/menu.css"
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
export default function Menu() {
  const {handleaddtocart} = useContext(Context);
   
  
  return (<>
  <div className='menubody'>

    <p className='titlemenu'>Burger's</p>
    <hr />
    <div className="foodgrid">
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top5.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Veg Burger</h4>
    <p className="card-text2">crispy burger with creamy sauce and lettuce</p>
    <p className="card-text price">50₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Veg Burger",50)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Maharaja jr Burger</h4>
    <p className="card-text2">crispy burger patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">120₹</p>
    <button className="btn btn-warning" type='submit'onClick={()=>{handleaddtocart("Maharja jr Burger",120)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Maharaja Burger</h4>
    <p className="card-text2">crispy burger patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">190₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Maharaja Burger",190)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/top6.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Classic Cheese Burger</h4>
    <p className="card-text2">cheesy burger with cheesy sauce and lettuce and onions</p>
    <p className="card-text price">160₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("classNameic Cheese Burger",160)}}>Add to Cart</button>
  </div>
</div>
</div>
    </div>
  <div className='menubody'>

    <p className='titlemenu'>Wraps's</p>
    <hr />
    <div className="foodgrid">
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Veg Wrap</h4>
    <p className="card-text2">soft Wrap with creamy sauce and lettuce</p>
    <p className="card-text price">85₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Veg Wrap",85)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Classic Wrap</h4>
    <p className="card-text2">crispy aloo patty with jalapenos and lettuce and nachos</p>
    <p className="card-text price">70₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("classNameic Wrap",70)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Paneer Wrap</h4>
    <p className="card-text2">crispy paneer patty with mayonaise and lettuce</p>
    <p className="card-text price">190₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("Paneer Wrap",190)}}>Add to Cart</button>
  </div>
</div>
<div className="card cardmenu" style={{width: "18rem"}}>
  <img src="src/store/wrap3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body card-bodymenu">
    <h4 className="card-title">Classic Cheese Wrap</h4>
    <p className="card-text2">cheesy Patty with cheesy sauce and lettuce and onions</p>
    <p className="card-text price">210₹</p>
    <button className="btn btn-warning" type='submit' onClick={()=>{handleaddtocart("classNameic Cheese Wrap",210)}}>Add to Cart</button>
  </div>
</div>
</div>

      
    
    </div>
    </>
  );
}
