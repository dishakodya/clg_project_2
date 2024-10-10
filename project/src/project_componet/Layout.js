import React from "react";
import {Link} from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Project_navbar from "./Project_navbar";

function Layout()
{
    <>
       <Project_navbar/>
       <Outlet/>
    </>
    
}

export default Layout;