import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jogadores from "./pages/Jogadores";
import Socio from "./pages/Socio";
import Uniformes from "./pages/Uniformes";
import './css/Style.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/jogadores" element={<Jogadores />} />
                        <Route path="/socio" element={<Socio />} />
                        <Route path="/uniformes" element={<Uniformes />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
