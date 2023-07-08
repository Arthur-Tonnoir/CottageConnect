import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Connexion/Connexion";
import Register from "./components/Inscription/Inscription";
import Profil from "./components/Profil";
import Home from "./components/Home/Home";
import Admin from "./components/Admin";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Formulaire/Formulaire";
import AddCottages from "./components/AddCottages/AddCottages";
import PageProfil from "./Views/PageProfil/PageProfil";
function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/addcottage" Component={AddCottages} />
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profil" Component={Profil} />
          <Route path="/admin" Component={Admin} />
          <Route path="/contact" Component={Contact} />
          <Route path="/PageProfil" Component={PageProfil} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
