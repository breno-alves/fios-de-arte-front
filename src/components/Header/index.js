import React, { useEffect } from 'react';
import './styles.css';
import Logo from '../../assets/Logo.png';

const Header = () => {

    useEffect(() => {
        window.onscroll = () => {
            const headerContainer = document.querySelector('header');

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                headerContainer.classList.add('header-open');
            } else {
                headerContainer.classList.remove('header-open');
            }
        }
    });

    return (
        <header className="header">
            <div className="header-container">
                <img className="logo" src={Logo}></img>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Orçamento</a></li>
                    <li><a href="#">FAQ</a></li>  
                </ul>
            </div>
        </header>
    )
}

export default Header;