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
                />
            </div>
            <div className={style.popular_post_right}>
                <small>{postDetail.date}</small>
                <Link href="/blog/12">
                    <h5>{postDetail.title}</h5>
                </Link>
            </div>
        </div>
    );
}

export default PopularPost;
