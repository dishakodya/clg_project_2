import { Link, Outlet } from "react-router-dom";
const Project_navbar =()=>{
    return(
        <>
<div className="row" >
  <div className="col-2" style={{width:"60px"}} >
   
    <img style={{width:"60px",height:"56px"}} src={"https://cdn270-genai.picsart.com/8013d2af-83e1-42cd-951d-c5f03aff54aa/466157719029201.jpg?to=fixed&r=300"}/>




    </div> 
<div className="col">


       
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

     {/* <Link class="navbar-brand" >Navbar
     </Link> */}
    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/pro">pro</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/pro/add"}>add</Link>
        </li>

        </ul> 
    </div>
  </div>
</nav>
</div>
</div>


    {/* <img style={{width:"1230px",height:"520px"}} src={"https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/> */}
    <Outlet/>
        </>

    )
}
export default Project_navbar;