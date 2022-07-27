import React, { useState, useEffect } from 'react';
import './Nav.css';
import profile from './profile.png';

function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    className='nav__logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    // src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    // width="400"
                    alt=""
                />
                <a href="https://www.instagram.com/andreassibua_/" rel="noreferrer" target="_blank">
                <img
                    className='nav__avatar'
                    src={profile}
                    alt=""
                    title="Andreas Sibua"
                />
                </a>
            </div>
        </div>
    )
}

export default Nav;