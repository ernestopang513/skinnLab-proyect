import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import { AboutUs } from './components/aboutUs/AboutUs';
import { Header } from "./components/general/Header";
import { Nav } from "./components/general/Nav";
import { HomeScreen } from './components/home/HomeScreen';
import {Wrapper} from './stylish__src/stylish__src'
const DIV = styled.div`
    margin-top: 1000px;
`;
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      {/* <Wrapper > */}
        <Header
          open = {open}
          setOpen = {setOpen}  
        />
        <Nav
          open = {open}
        />
      {/* </Wrapper> */}
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
      <DIV>
        <h2>Footer</h2>
      </DIV>
    </Router>
  )
}
export default App;