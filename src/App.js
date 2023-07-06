import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Login from "./components/Login";
import Register from "./components/Register";
import Profil from "./components/Profil";
import HomePage from '../src/Views/HomePage/HomePage'
import Admin from "./components/Admin";
import Login from './Views/Login/Login';
import PageProfil from './Views/PageProfil/PageProfil'


function App() {
  return (

    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profil" Component={Profil} />
          <Route path="/admin" Component={Admin} />
        </Routes>
      </Router> */}
      {/* <Login/> */}
      <HomePage/>
    </div>
  );
}

export default App;
