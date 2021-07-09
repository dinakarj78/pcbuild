import React, { useEffect } from 'react'
import ProcessorProducts from './Cpuproducts';
import Commerce  from '@chec/commerce.js';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import './processorstyles.css'

const Info=()=>
{
    const [prodcuts,setProducts]=useState([]);
    const commerce=new Commerce("pk_29127732ffc721c838aefb211251e140ed6900ba27221",true);
     const fetchProducts= async ()=>
     {
      const { data }=await commerce.products.list();
      setProducts(data);
      }    

   useEffect(()=>{
     fetchProducts();
      },[])

    const styles=
   {
      position:'relative',
      marginTop:'auto',
      marginLeft:'425px',
      width:'800px',
      height:'max-content',
      
   }

    const headerstyle=
   {
       marginTop:'20px',
       textAlign:'center',
       fontSize:'105px',
       color:'black',
   }

     return(
      <div>
       <Sidebanner/>
         <h1 style={headerstyle}>Processors</h1>
            <Grid  container  spacing={4} style={styles} >
             {
               prodcuts.map((item)=>(
                 <Grid item xs={3} lg={6} md={3} xl={3} key={item} >
                  <ProcessorProducts items={item}/>
               </Grid>
               ))
             }   
            </Grid>
      </div>
   )
}
const Sidebanner=()=>
{
   return (
      <div className="sideBanner"></div>
   );
}
export default Info
