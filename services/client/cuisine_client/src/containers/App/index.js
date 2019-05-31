import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from '../HomePage/index'

class App extends React.Component{
    render(){
       return(
        <Switch>
            <Route exact path={`/`} component={HomePage} />
        </Switch>
       ) 
    }
}


export default connect()(App);