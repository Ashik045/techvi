import Image from 'next/image';
import React from 'react';
import { FaCalendarWeek, FaUserAlt } from 'react-icons/fa';
import style from './blogcom.module.scss';

function BlogCom({ blogDetails }) {
    return (
        <div className={style.blog_com}>
            {blogDetails.map((details) => (
                <div key={details.id} className={style.blog_com_item}>
                    <Image src={details.image} alt="blogHeader" />

                    <div className={style.blog_com_item_body}>
                        <div className={style.author}>
                            <p>
                                <FaUserAlt /> {details.author}
                            </p>
                            <p>
                                <FaCalendarWeek />
                                {details.date}
                            </p>
                        </div>

                        <h4>{details.title}</h4>
                        <p>{details.description}</p>
                        <p className={style.readmore}>Read More</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogCom;
