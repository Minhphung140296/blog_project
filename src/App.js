import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Containers/Home";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import ContactUS from "./Containers/ContactUS";
import Post from "./Containers/Post";
import AboutUS from "./Containers/AboutUS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/Home" exact component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/post" component={Post} />
        <Route path="/about-us" component={AboutUS} />
      </div>
    </Router>

  );
}

export default App;
