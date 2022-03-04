import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import style from './team.module.scss';

function Team({ detail }) {
    return (
        <div className={style.team}>
            <div className={style.team_hover}>
                <Image
                    src={detail.image}
                    alt={detail.name}
                    height={700}
                    className={style.team_img}
                />
                <div className={style.hide_div}>
                    <FaFacebook className={style.hide_div_icon} />
                    <FaGoogle className={style.hide_div_icon} />
                    <FaLinkedin className={style.hide_div_icon} />
                </div>
            </div>
            <h4>{detail.name}</h4>
            <h6>{detail.position}</h6>
        </div>
    );
}

export default Team;
