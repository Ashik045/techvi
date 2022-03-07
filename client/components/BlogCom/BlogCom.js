/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarWeek, FaUserAlt } from 'react-icons/fa';
import style from './blogcom.module.scss';

function BlogCom({ blogDetails }) {
    return (
        <div className={style.blog_mainn}>
            <div className={style.blog_main_header}>
                <h5>BLOG & ARTICLE</h5>
                <h1>Recent Blog</h1>
            </div>
            <div className={style.blog_com}>
                {blogDetails.map((details) => (
                    <div key={details._id} className={style.blog_com_item}>
                        <Image
                            className={style.blog_com_item_img}
                            src={details.image}
                            alt="blogHeader"
                            height={400}
                            width={600}
                        />

                        <div className={style.blog_com_item_body}>
                            <div className={style.author}>
                                <p>
                                    <FaUserAlt /> {details.author}
                                </p>
                                <p>
                                    <FaCalendarWeek />
                                    {new Date(details.createdAt).toLocaleString()}
                                </p>
                            </div>

                            <Link href={`/blog/${details._id}`} passHref>
                                <h4>{details.title}</h4>
                            </Link>
                            <p className={style.description}>{details.description}</p>
                            <Link href={`/blog/${details._id}`} passHref>
                                <p className={style.readmore}>Read More</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogCom;
