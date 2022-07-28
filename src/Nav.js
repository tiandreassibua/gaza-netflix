import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);
    let history = useHistory();

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
                    onClick={() => history.push("/")}
                    className='nav__logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    // src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    // width="400"
                    alt=""
                />

                <img
                    onClick={() => history.push("/profile")}
                    className='nav__avatar'
                    src="https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav;