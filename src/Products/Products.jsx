import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import axios from "axios"
import { Grid } from '@mui/material';
const Handleproducts = () => {
  const[product,setProduct]=React.useState([]);


    const GetData=()=>{
        axios.get("http://localhost:4000/api/products").then((res)=>{
            console.log(res.data);
            
        setProduct(res.data)
        }).catch(err=>{
            console.log(err);
        });
    };

    React.useEffect(() =>{
      GetData();
    },[])

    return ( <div>
        {product.map((item, index)=>{
            return <SingleProduct key={index} product={product} />
        })}
        </div> );
};
 
export default Handleproducts;