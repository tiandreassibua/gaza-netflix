import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function ProfileScreen() {
    const user = useSelector(selectUser);
    
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img
                        src="https://i.pinimg.com/originals/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.png"
                        alt=""
                    />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;