import React from "react";
import { BrowserRouter as Router, Route,  Routes, } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Main } from "./components/Pages/Main";
import { Teste } from "./components/Pages/Teste";

export const Rotas = () => {
    return (
    <Router>
    <Routes>
    <Route path="/" element={<Main />} />
    <Route  path="/teste"  element={< Teste />}/>
    
    
    
    </Routes>
    </Router>
    )
}
