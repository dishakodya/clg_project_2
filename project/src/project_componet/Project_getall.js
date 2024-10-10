import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Project_update from "./Project_update.js";

const Project_getall=()=>{
    const [data,setData]=useState([]);
    let navigate = useNavigate();

    

    useEffect(()=>{
    let appURL= 'http://localhost:8000/pro/'
        fetch(appURL)
       .then((res)=>res.json())
       .then((res)=>setData(res))
    })

    return(
        <>
        <h1 style={{paddingBottom:"20px",paddingBlockStart:"10px",color:"gray"}}> women's exclusive watch</h1>
        <div className="container" style={{marginLeft:"35px"}}>
            <div className="row">
                
            
            {
                data.map((item)=>{
                    return (
                    <>
                <div className=" col-3 mb-2" >
                    <div class="card" style={{width:"277px",height:"100%"}} >
                        
                    <img src={item.Image}  className="img"  alt="..."/>
                    <div class="card-body">
                         {/* <h5 class="card-text">prodect id :{item.id}</h5> */}
                        <h6 class="card-title">{item.name}</h6>
                        <h6 class="card-text">{item.price}</h6>
                        <h6 class="card-text">color :{item.color}</h6>
                        <Link to={'/pro/'+item.id} style={{width:"245px" ,color:'gray', border:"2px solid wheat" }} class="btn btn">Read more about Product</Link>

                         {/* Edit  */}
                         {/* <br/>
                         <div className="row">
                            <div className="col-6">

                            <Link to={'/pro/update/'+item.id}  style={{width:"100%",color:'gray', border:"2px solid wheat"}} className="btn btn mt-2">Edit</Link>
                      
                            </div>
                            <div className="col-6"> */}
                             {/* delete */}
                            {/* <button style={{width:"100%",backgroundColor:'' ,color:'gray', border:"2px solid wheat"}} className="btn btn mt-2" onClick={()=>{
                            fetch("http://localhost:8000/pro/"+item.id,{method:'DELETE'})
                            .then(res=>res.json())
                            .then(()=>navigate('/pro'))

                         }}>Delete</button>
                            </div>


                        
                           
                         </div> */}
                      

                    </div>
                    </div>
                </div>


                    </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
   
}

export default Project_getall;