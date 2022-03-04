import React from 'react';
import style from './provideItem.module.scss';

function ProvideItem({ details }) {
    return (
        <div className={style.provideItem}>
            <div className={style.icon}>{details.icon}</div>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <a href="#top">Read More</a>
        </div>
    );
}

export default ProvideItem;
