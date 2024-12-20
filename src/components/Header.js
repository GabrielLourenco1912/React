import React, { useState } from 'react';
import '../css/Style.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <header id="header">
                <img id="logo" src="/assets/img/santos.jpg" alt="Santos" />
                <div id="burguer" onClick={toggleMenu}>
                    ☰
                </div>
            </header>
            <nav  className={menuActive ? 'active' : ''}>
                <ul id="menu">
                    <li><a className="abas" href="/">Principal</a></li>
                    <li><a className="abas" href="/jogadores">Jogadores</a></li>
                    <li><a className="abas" href="/uniformes">Uniformes</a></li>
                    <li><a className="abas" href="/socio">Sócio</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
