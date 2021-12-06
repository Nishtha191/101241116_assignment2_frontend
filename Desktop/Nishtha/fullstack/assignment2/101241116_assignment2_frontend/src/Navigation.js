import React from 'react'
import { Navbar, Nav } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Create from './Create';
import Update from './Update';
import View from './View';
import ViewOne from './ViewOne';
import Home from './Home';


function Navigation() {
    return (
        < Router>

            <Navbar>
                <Nav>
                    <Link to="/#" >Home</Link>
                    <Link to="/view" >View</Link>
                    <Link to="/create" >Create</Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route path="/" exact ><Home /></Route>
                <Route path="/view"><View /></Route>
                <Route path='/view' render={(props) => <View {...props} />} />
                <Route path="/create"><Create /></Route>
                <Route path='/update/:id' render={(props) => <Update {...props} />} />
                <Route path='/viewone/:id' render={(props) => <ViewOne {...props} />} />
            </Switch>

        </Router>
    )

}

export default Navigation;