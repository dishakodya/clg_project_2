



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Project_getall from './project_componet/Project_getall';
import Project_getby_id from './project_componet/Project_getby_id';
import Project_navbabr from './project_componet/Project_navbar';
import {Link ,BrowserRouter,Routes,Route} from 'react-router-dom';
import Project_update from './project_componet/Project_update';
import Project_layout from './project_componet/Project_layout';
import Project_add from './project_componet/Project_add';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>
    <Routes>

        <Route path='/' element={<Project_navbabr/>}>
        <Route path='/' element={<Project_layout/>}/>
           <Route path='/pro' element={<Project_getall/>}/>
           <Route path='/pro/:id' element={<Project_getby_id/>}/>
           <Route path='pro/update/:id' element={<Project_update/>}/>
           <Route path='pro/add' element={<Project_add/>}/>
        
         </Route>
      

    </Routes>
  </BrowserRouter>
  
  
);
