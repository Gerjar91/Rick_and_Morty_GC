 import React from 'react';
import './AboutMeScreen.css';
import { useNavigate } from 'react-router-dom';

const AboutMeScreen = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="profile">
                <img className="profile-image" src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/341757527_133746399559270_7746435732546674500_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeaaj1m3IL3An8mFFlAa0szU2gz2hTygvNTaDPaFPKC0VUrAKfFyA_rPdcyFv1S2M&_nc_ohc=tT-tEwt6ZpsAX_4nYlD&_nc_ht=scontent-eze1-1.xx&oh=00_AfBvZnVZExGn-NHQ-tGQy6TX44NFaBUHIFs3GEnx1W2Pow&oe=64840FBF" alt="Profile" />
                <h2 className="profile-name">Germán Conil</h2>
                <p className="profile-description">
                I am a passionate architect with a deep interest in technology and web programming. At the age of 32, I made a career transition and dedicated myself to web development, specializing in full-stack development. I am a graduate of Henry, a renowned programming academy, where I acquired the necessary skills and knowledge to create modern and efficient web applications.                </p>
                <button className="button" onClick={() => { navigate("/HomeScreen") }}>
                    Home
                </button>
            </div>
        </div>
    );
};

export default AboutMeScreen; 
