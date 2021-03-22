import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;

        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))

    }, [leagues])

    return (
        <div>
            <HomeBanner></HomeBanner>
            <Club leagues={leagues}></Club>
        </div>
    );
};

export default Home;