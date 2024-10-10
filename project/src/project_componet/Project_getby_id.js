import { useEffect, useState } from "react";
import {Link, useParams ,useNavigate } from "react-router-dom";

const Project_getby_id=()=>{
    const [data,setData]=useState({});
    const {id} =useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8000/pro/'+id)
       .then(res=>res.json())
       .then((data)=>setData(data))
    })
 
    return(
        <>
        <h1 style={{color:"gray"}}> Product by id</h1>
        <div className="container" style={{marginLeft:"35px"}}>
            <div className="row"></div>
        <div className=" p-2">
                    <>
                    <div className="p-2" >
                    <div class="card"   style={{width:"300px", margin: "0 auto"}} >
                    <img src={data.Image}  style={{width:"275px",}}  alt="..."/>
                        <div class="card-body">
                            <h6 class="card-text">prodect id :{data.id}  {data.name}</h6>
                        {/* <h6 class="card-title"> {data.name}</h6> */}
                        <h6 class="card-text">{data.price}</h6>
                        <h6 class="card-text">color {data.color}</h6>
                        <Link to={'/pro'} style={{width:"100%",backgroundColor:'' ,color:'gray', border:"2px solid wheat"}} class="btn btn-">back</Link>
                          {/* Edit  */}
                          <br/>
                         <div className="row">
                            <div className="col-6">

                            <Link to={'/pro/update/'+data.id}  style={{width:"100%",color:'gray', border:"2px solid wheat"}} className="btn btn mt-2">Edit</Link>
                      
                            </div>
                            <div className="col-6">
                             {/* delete */}
                            <button style={{width:"100%",backgroundColor:'' ,color:'gray', border:"2px solid wheat"}} className="btn btn mt-2" onClick={()=>{
                            fetch("http://localhost:8000/pro/"+data.id,{method:'DELETE'})
                            .then(res=>res.json())
                            .then(()=>navigate('/pro'))

                         }}>Delete</button>
                            </div>
                            </div>
                    </div>
                    </div>
                    </div>
                    </>
          </div>
          </div>
        </>
    )
   
}
export default Project_getby_id;