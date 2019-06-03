import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CartSidebar from '../CartSidebar'
import NavigationBar from '../NavigationBar'
import HomePage from '../HomePage/index'
import MenusPage from '../MenusPage/index'

class App extends React.Component{
    render(){
       return(
           <React.Fragment>
               <NavigationBar/>
               <CartSidebar/>
                <Switch>
                    <Route exact path={`/`} component={HomePage} />
                    <Route exact path={`/menus`} component={MenusPage} />
                </Switch>
        </React.Fragment>
       ) 
    }
}


export default connect()(App);