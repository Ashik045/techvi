import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './popular.module.scss';

function PopularPost({ postDetail }) {
    return (
        <div className={style.popular_post}>
            <div className={style.popular_post_left}>
                <Image
                    alt={postDetail.title}
                    src={postDetail.image}
                    className={style.popular_post_left_img}
                    height={100}
                    width={80}
                />
            </div>
            <div className={style.popular_post_right}>
                <small>{new Date(postDetail.createdAt).toDateString()}</small>
                <Link href={`/blog/${postDetail._id}`} passHref>
                    <h5>{postDetail.title}</h5>
                </Link>
            </div>
        </div>
    );
}

export default PopularPost;
