import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Insert(){
    const[data,setData]=useState({})
    const navigate = useNavigate();

    return (
        <>
                <h1 style={{paddingBottom:"20px",paddingBlockStart:"10px",color:"gray"}}>Add Product</h1>

         <div className='myclass' style={{marginTop:"20px"}} >
    
       
           <div className='add_table' style={{paddingBlockStart:"7px"}}>
            Insert id :  
    
            <input className='add_table1' placeholder='Gadget id' onChange={(e)=>{
                setData({...data,id:e.target.value})
            }}/>
            
           </div>
   
    
        <div className='add_table'>
            Insert name :
            <input className='add_table1' placeholder='Gadget name' onChange={(e)=>{
                setData({...data,name:e.target.value})
            }}/>
            
        </div>
   
        <div className='add_table' >
            Insert price :
            <input className='add_table1' placeholder='Gadget price' onChange={(e)=>{
                setData({...data,price:e.target.value})
            }}/>
        </div>
        <div className='add_table' >
            Insert color :
            <input className='add_table1'  placeholder='Gadget color' onChange={(e)=>{
                setData({...data,color:e.target.value})
            }}/>
        </div>
        <div className='add_table' >
            Insert image :  
            <input className='add_table1' placeholder=' Gadget image' onChange={(e)=>{
                setData({...data,Image:e.target.value})
            }}/>
        </div>
        <div class="d-flex align-items-center">
        <button className="btn mx-auto btn btn mt-2" style={{width:"190px",color:'gray', border:"2px solid wheat"}} onClick={()=>{fetch("http://localhost:8000/pro/add/",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(()=>navigate('/pro'))
    }}>add</button>
    </div>
 </div>
        </>
    )
}

export default Insert