import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

import NavigationBar from '../NavigationBar'
import HomePage from '../HomePage/index'
import LoginPage from '../LoginPage/index'
import AdminPage from '../AdminPage/index'
import ModelPage from '../ModelPage/index'
import AboutPage from '../AboutPage/index'


class App extends React.Component{
    render(){
       return(
           <React.Fragment>
               <ScrollUpButton/>
               <NavigationBar/>
                <Switch>
                    <Route exact path={`/`} component={HomePage} />
                    <Route exact path={`/login`} component={LoginPage} />
                    <Route path={`/about`} component={AboutPage} />
                    <Route path={`/admin`} component={AdminPage} />
                    <Route path={`/model`} component={ModelPage} />
                </Switch>
        </React.Fragment>
       ) 
    }
}


export default connect()(App);