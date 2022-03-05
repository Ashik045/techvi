import React from 'react';
import style from './footercol.module.scss';

function FooterCol({ footerDetails, header }) {
    return (
        <div className={style.foo_col}>
            <h4>{header}</h4>
            <hr />
            {footerDetails.map((detail) => (
                <div key={detail.id}>
                    {detail.mainTitle && <p>{detail.mainTitle}</p>}
                    <a href="#top">{detail.title}</a>
                </div>
            ))}
        </div>
    );
}

export default FooterCol;
