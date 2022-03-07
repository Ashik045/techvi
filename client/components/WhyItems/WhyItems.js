import React from 'react';
import style from './WhyItems.module.scss';

function WhyItems({ whyDetails }) {
    return (
        <div className={style.whyItems}>
            {whyDetails.map((details) => (
                <div key={details.id} className={style.whyItem}>
                    {details.title}
                </div>
            ))}
        </div>
    );
}

export default WhyItems;
