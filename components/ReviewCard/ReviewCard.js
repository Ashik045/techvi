import Image from 'next/image';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import style from './ReviewCard.module.scss';

function ReviewCard({ details }) {
    const { title, description, image, name } = details;
    return (
        <div className={style.review_card}>
            <p>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </p>
            <p>{description}</p>
            <Image
                className={style.review_card_img}
                src={image}
                alt={title}
                height={80}
                width={80}
            />
            <h3>{name}</h3>
            <h5>{title}</h5>
        </div>
    );
}

export default ReviewCard;
