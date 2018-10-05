import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Home from './containers/Home/Home'
import App from './containers/App/App'
import Project from './containers/Home/Projects/Project'
import Resume from './containers/Home/Resume/Resume'

export default (
    <BrowserRouter>
        <div>
            <Route path="/resume" component ={App}/>
            <Route exact path ="/" component = {Home}/>
            
                    
            <Route path ="/projects" component = {Project}/> 
            <Route path ="/resume" component = {Resume}/> 
            
        </div>
   </BrowserRouter>

);