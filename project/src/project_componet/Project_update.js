import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Project_update(){
    const [data,setData]=useState({})
    const {id}=useParams();
    const navigate = useNavigate();

            const aplURL="http://localhost:8000/pro/"+id;
            useEffect(()=>{
                fetch(aplURL)
               .then(res=>res.json())
               .then(res=>setData(res))
            },[])

            return(
                <>
                <h1 style={{paddingBottom:"20px",paddingBlockStart:"10px",color:"gray"}}>Update Product </h1>
      <div className='myclass' style={{marginTop:"20px"}} >

                <div className='add_table' style={{paddingBlockStart:"7px"}}>
                 Insert id :  
                    <input className='add_table1' placeholder='Gadget id' value={data.id} onChange={(e)=>{
                        setData({...data,id:e.target.value})
                    }}/>
                </div>

                <div className='add_table'>
                 Insert name :
                    <input className='add_table1' placeholder='Gadget name' value={data.name} onChange={(e)=>{
                        setData({...data,name:e.target.value})
                    }}/>
                </div>

                <div className='add_table' >
                 Insert price :
                    <input className='add_table1' placeholder='Gadget price'  value={data.price} onChange={(e)=>{
                        setData({...data,price:e.target.value})
                    }}/>
                </div>
                
                <div className='add_table' >
                 Insert color :
                    <input className='add_table1'  placeholder='Gadget color' value={data.color} onChange={(e)=>{
                        setData({...data,color:e.target.value})
                    }}/>
                </div>

                <div className='add_table' >
                Insert image : 
                    <input className='add_table1' placeholder=' Gadget image' value={data.image} onChange={(e)=>{
                        setData({...data,Image:e.target.value})
                    }}/>
                </div>

                <div class="d-flex align-items-center">
                <button  className="btn mx-auto btn btn- mt-2" style={{width:"190px" ,color:'gray', border:"2px solid wheat"}}  onClick={()=>{
                    fetch("http://localhost:8000/pro/"+id,{
                        method:"PATCH",
                        body:JSON.stringify(data),
                        headers:{
                            'Content-Type':'application/json',
                        }
                    })
                    .then((res)=>res.json())
                    .then(()=>{navigate('/pro')})
                }}>Save</button> 
                </div>
</div>
                </>
            )
}
export default Project_update;