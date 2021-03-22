import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Banner from '../../Images/Banner/banner-bg.png';
import Male from '../../Images/Conditional-img/male.png';
import Female from '../../Images/Conditional-img/female.png';
import Mixed from '../../Images/Conditional-img/mixed.png';
import './ClubDetail.css';
import {
    FaTwitter, FaBaseballBall,
    FaYoutube, FaGlobeAmericas,
    FaRev, FaFontAwesomeFlag, FaGrav
} from "react-icons/fa";




const ClubDetail = () => {
    const [getLeague, setGetLeague] = useState([])
    const {
        intFormedYear, strTwitter,
        strWebsite, strYoutube, strCountry,
        strGender, strLeagueAlternate, strLogo,
        strDescriptionEN, strSport
    } = getLeague;
    
    const { clubId } = useParams()
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${clubId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGetLeague(data.leagues[0]))
    }, [clubId])

    // conditional Image 
    const maleImage = <img src={Male} alt="" />;
    const femaleImage = <img src={Female} alt="" />;
    const mixedImage = <img src={Mixed} alt="" />;

    // style elements for details bg-img and logo 
    const detailsLogoStyle = {
        backgroundImage: `url(${Banner})`,
        height: '300px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    // set social link and react icons 
    const twitter = <FaTwitter />
    const webSite = <FaGlobeAmericas />
    const youTube = <FaYoutube />
    const found = <FaRev />
    const flag = <FaFontAwesomeFlag />
    const gander = <FaGrav />
    const sport = <FaBaseballBall />

    return (
        <div>
            <div className="logo-style" style={detailsLogoStyle}>
                <img src={strLogo} alt="" />
            </div>
            <div className="details-container">
                <div className="detail-body">
                    <h1>{strLeagueAlternate}</h1>
                    <h5>{found} Founded: {intFormedYear}</h5>
                    <h5>{flag} Country: {strCountry}</h5>
                    <h5>{gander} Gender: {strGender}</h5>
                    <h5>{sport} Sport: {strSport}</h5>

                </div>
                <div className="conditional-img">
                    {
                        strGender === "Male" ? maleImage : strGender === "Female" ? femaleImage : mixedImage
                    }
                </div>
            </div>
            <div>
                <h2>Description: {strDescriptionEN}</h2>
            </div>
            <div className="social-link">
                <a className="social-icon-1" href={`https://${strTwitter}`} >{twitter}</a>
                <a className="social-icon-2" href={`https://${strWebsite}`} >{webSite}</a>
                <a className="social-icon-3" href={`https://${strYoutube}`} >{youTube}</a>
            </div>
        </div>
    );
};

export default ClubDetail;