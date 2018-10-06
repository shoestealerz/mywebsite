import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Home from './containers/Home/Home'
import App from './containers/App/App'
import Project from './containers/Home/Projects/Project'
import Resume from './containers/Home/Resume/Resume'
import About from './containers/Home/About/About'
export default (
    <BrowserRouter>
        <div>
            <Route path="*" component ={App}/>
            <Route exact path ="/" component = {Home}/>
            
                    
            <Route path ="/projects" component = {Project}/> 
            <Route path ="/resume" component = {Resume}/> 
            <Route path ="/about" component = {About}/> 
        </div>
   </BrowserRouter>

);