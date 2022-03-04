import React from 'react';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import team4 from '../../images/team4.jpg';
import Team from '../Team/Team';
import style from './teamdetails.module.scss';

const details = [
    {
        id: 1,
        image: team1,
        name: 'Ava Farrington',
        position: 'Founder, ceo',
    },
    {
        id: 2,
        image: team2,
        name: 'Lucas Martinez',
        position: 'Project Manager',
    },
    {
        id: 3,
        image: team3,
        name: 'Alishia Fulton',
        position: 'Chief creative officer',
    },
    {
        id: 4,
        image: team4,
        name: 'Kevin Haley',
        position: 'Co-founder, cto',
    },
];

function TeamDetails() {
    return (
        <div className={style.team_sec}>
            <div className={style.team_header}>
                <h5>TEAM MEMBER</h5>
                <h1>Expert Team</h1>
            </div>

            <div className={style.team_header_main}>
                {details.map((detail) => (
                    <Team key={detail.id} detail={detail} />
                ))}
            </div>
        </div>
    );
}

export default TeamDetails;
