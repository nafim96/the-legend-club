import React from 'react';
import './HomeBanner.css';
import Banner from '../../Images/Banner/banner-bg.png';

const HomeBanner = () => {
    const bannerStyle = {
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '300px',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }

    return (
        <div className="header-style" style={bannerStyle}>
            <p>The Legend Club</p>
        </div>
    );
};

export default HomeBanner;