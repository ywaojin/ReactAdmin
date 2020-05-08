import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import List from './pages/list'
import Home from './pages/home'
import Index from './pages/index'

function AppRouter(){
    return(
        <Router>
            <ul>
                <li><Link to="/" >首页</Link></li>
                <li><Link to="/list/123" >列表</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>

    )
}

export default AppRouter