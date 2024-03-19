import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context, server } from '../../main';
import toast from 'react-hot-toast';
import { IoMdTrophy } from 'react-icons/io';

function Cartbody() {
   
    const [productlist, setproductlist] = useState([]);
    const [coupon,setcoupon] = useState(false);
    const { refresh, IsAuthenticated,setrefresh ,logout} = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);

    

    const handlecoupon =()=>{
        const couponinput = document.getElementById("couponinput");
        if(couponinput.value==='xbbhdd'){
            setcoupon(true);
            toast.success("coupon applied");
        }
        else{
            setcoupon(false);
            toast.error("No such coupon exist");
        }
    }

    const handlecheckout = async () => {
        const checkoutprice = document.getElementById('totalprice');
        // Check if the element is found
        if (checkoutprice) {
            // Use textContent or innerText to get the textual content
            const checkvalue = checkoutprice.textContent;
            
            
            try {

                const {key} = await axios.get(`${server}/api/getkey`,{
                    withCredentials:true,
                })
                const response = await axios.get(`${server}/user/me`,{withCredentials:true,})
                const name = response.data.user.name;
                const email= response.data.user.email;
              
                const { data:{order} } = await axios.post(
                    `${server}/api/checkout`,
                    {
                        checkvalue
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        withCredentials: true,
                    }
                );

                const options = {
                    key, // Enter the Key ID generated from the Dashboard
                    amount:order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    currency: "INR",
                    name: "Zwigato group",
                    description: "Test Transaction",
                    order_id:order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    callback_url: `${server}/api/verify`,
                    prefill: {
                        name,
                        email,
                        contact: "9000090000"
                    },
                    notes: {
                        address: "Razorpay Corporate Office"
                    },
                    theme: {
                        color: "#000000"
                    }
                };
                const razor = new Razorpay(options);
                razor.open();           
                
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('Element with id "totalprice" not found.');
        }
    };
    

    const handleGetProducts = async () => {
        try {
            const { data } = await axios.get(`${server}/userorders/previousorders`, {
                withCredentials: true,
            });
        
            setproductlist(data.userOrders);
        } catch (error) {
            
        }
    };
    useEffect(() => {
        let totalPrice = 0;
        productlist.forEach(product => {
            totalPrice += product.price*product.quantity;
        });
        setTotalPrice(totalPrice);
    }, [productlist]);

    useEffect(() => {
        handleGetProducts();
    }, [refresh, IsAuthenticated,logout]);

    const increment = async (productname) => {
        try {
            const { data } = await axios.put(
                `${server}/userorders/neworder/increment`,
                { order: productname },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
           
           setrefresh((prev)=>!prev);
        } catch (error) {
            console.log(error);
            toast.error('Failed to increment products');
        }
    };

    const decrement = async (productname) => {
        try {
            const { data } = await axios.put(
                `${server}/userorders/neworder/decrement`,
                { order: productname },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
           
            setrefresh((prev)=>!prev); // Refresh product list after decrement
        } catch (error) {
            console.log(error);
            toast.error('Failed to decrement products');
        }
    };
    const deleteOrder = async (order) => {
        try {
            await axios.delete(`${server}/userorders/previousorders/deleteorder`, {
                withCredentials: true,
                data: { order }
            });
            toast.success('product deleted successfully');
            setrefresh((prev) => !prev);
        } catch (error) {
            console.log(error);
            toast.error('Failed to delete order');
        }
    }
    const getUserorders = async(productname) => {
            const { data } = await axios.post(`${server}/userorders/myorders`,{
                order:productname,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                 // Pass productname as query parameter
                withCredentials: true,
            });
            
            const quantityvalue = document.getElementById(`quantityvalue${productname}`);
            
            quantityvalue.value = data.quantity;
        
        
    };
    useEffect(() => {
        productlist.forEach(product => {
            const quantityValue = document.getElementById(`quantityvalue${product.order}`);
            if (quantityValue) {
                getUserorders(product.order)
            }
        });
    }, [refresh, productlist]);


    return (
        <div className="products">
            {productlist.map((product) => (
                <div className="product" key={product.id}>
                    <React.Fragment>
                        <button type="button" className="btn-close" aria-label="Close" onClick={()=>deleteOrder(product.order)}></button>
                        <div className="producttitle">
                            <p>{product.order}</p>
                            <p className="productprice">₹{product.price}</p>
                        </div>
                        <div className="btn-group incdec" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-warning" onClick={() => decrement(product.order)}>
                                -
                            </button>
                            <input
                                type="text"
                                className="btn btn-outline-light"
                                id={`quantityvalue${product.order}`}
                                disabled
                                onChange={() => getUserorders(product.order)} // Ensure to handle change properly
                            />
                            <button type="button" className="btn btn-warning" onClick={() => increment(product.order)}>
                                +
                            </button>
                        </div>
                    </React.Fragment>
                    
                </div>
                
            ))}
              <div className="offer2">
                <span>Enter coupon here</span>
                <input type="text" id='couponinput' />
                <button className='btn btn-warning' onClick={()=>{handlecoupon()}}>APPLY</button>
            </div>
           
            {coupon?(<>
                <div className="initprice"> 
                <span>Price:- </span>
                <span id='price'>₹{totalPrice}</span>
                </div>
                <div className='couponhandle'>
                <span className='coupontext'>coupon discount</span>
                <span className='coupondiscount'>-₹80</span>
                </div>
                <div className="totalprice"> 
                <span>Total Price:- </span>
                <span id='totalprice2'>₹<span id='totalprice'>{totalPrice-80}</span></span>
                </div>
                </>
            ):(
                <div className="totalprice"> 
                <span>Total Price:- </span>
                <span id='totalprice2'>₹<span id='totalprice'>{totalPrice}</span></span>
                </div>
            )}
             <button className='btn btn-warning checkout' onClick={()=>{handlecheckout()}}>Check Out</button>               
                </div>
    );
}

export default Cartbody;
