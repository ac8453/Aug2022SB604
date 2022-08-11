import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>

      
      
    );
  }
}

export default App;
