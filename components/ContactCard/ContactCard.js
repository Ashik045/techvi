import React from 'react';
import style from './contactcard.module.scss';

function ContactCard({ cardDetails }) {
    return (
        <div className={style.contact_card}>
            <h4>{cardDetails.title}</h4>
            <p className={style.contact_card_desc}>{cardDetails.description}</p>
            <p className={style.contact_card_phn}>{cardDetails.phone}</p>
            <p>{cardDetails.email}</p>
        </div>
    );
}

export default ContactCard;
