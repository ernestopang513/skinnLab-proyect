import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import { AboutUs } from './components/aboutUs/AboutUs';
import { Footer } from "./components/general/Footer";
import { Header } from "./components/general/Header";
import { Nav } from "./components/general/Nav";
import { HomeScreen } from './components/home/HomeScreen';
const App = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
    // console.log(open);
  }
  
  return (
    <Router>
        <Header
          open = {open}
          handleMenu = {handleMenu}  
        />
        <Nav
          open = {open}
          handleMenu = {handleMenu}
        />
      <Switch>
        <Route
          exact
          path = '/'
          component = {HomeScreen}
        />
        <Route
          exact
          path = '/aboutUs'
          component = {AboutUs}
        />
        <Redirect to = '/' />
      </Switch>
      <Footer/>
    </Router>
  )
}
export default App;