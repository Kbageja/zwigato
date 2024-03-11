    import axios from 'axios';
    import React, { useContext, useEffect, useState } from 'react';
    import { Context, server } from '../../main';
    import toast from 'react-hot-toast';



    function Cartbody () {
        const [productlist,setproductlist] = useState([])
        const {user,IsAuthenticated,refresh,setrefresh} = useContext(Context)
        
       
        const handleget = async() =>{
            try {
                console.log(productlist);
                
                const { data } = await axios.get(`${server}/userproduct/getMyProducts`, {
                withCredentials: true,
                });
                setproductlist(data.userProducts);
                
            } catch (error) {
                console.log(error);
            }

        }
        useEffect(() => {
            handleget();
            
        },[refresh,IsAuthenticated]);
        

        return (    
            
        
            <div>
            {
        productlist.map((product) => (
            <React.Fragment key={product.id}>
                <p>{product.productname}</p>
                <p>{product.Price}</p>
            </React.Fragment>
        ))
    }

            
            </div>
        
        );
    }
    export default Cartbody;
