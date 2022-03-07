/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
    FaCalendarWeek,
    FaFacebookF,
    FaLinkedin,
    FaSearch,
    FaTwitter,
    FaUserAlt
} from 'react-icons/fa';
import PopularPost from '../../components/PopularPost/PopularPost';
import style from '../../styles/blogdetails.module.scss';

function BlogDetails({ blog, blogList }) {
    return (
        <div className={style.blog_details}>
            <div className={style.blog_details_main}>
                <div className={style.blog_left}>
                    <Image
                        className={style.blog_left_img}
                        src={blog.image}
                        alt="detail"
                        height={500}
                        width={800}
                    />
                    <div className={style.author1}>
                        <p>
                            <FaUserAlt /> {blog.author}
                        </p>
                        <p>
                            <FaCalendarWeek /> {new Date(blog.createdAt).toLocaleString()}
                        </p>
                    </div>

                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>

                    <div className={style.author2}>
                        <div>
                            <b>Tag:</b>
                            {blog.tags?.map((tag) => (
                                <small key={tag}> {tag} </small>
                            ))}
                        </div>
                        <p>
                            <b>Share:</b> <FaFacebookF className={style.author2_icon} />
                            <FaTwitter className={style.author2_icon} />
                            <FaLinkedin className={style.author2_icon} />
                        </p>
                    </div>
                    <hr />
                    <div className={style.author3}>
                        <p>
                            <FaArrowLeft className={style.author3_icon1} />
                            Prev Post
                        </p>
                        <p>
                            Next Post <FaArrowRight className={style.author3_icon2} />
                        </p>
                    </div>
                    <hr />
                </div>

                <div className={style.blog_right}>
                    <div className={style.search}>
                        <input className={style.inpp} type="email" placeholder="Search.." />
                        <FaSearch className={style.subb} />
                    </div>

                    <div className={style.pop_post}>
                        <h4>Popular Posts</h4>
                        <hr />
                        {blogList.map((posts) => (
                            <PopularPost key={posts._id} postDetail={posts} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:4000/api/blog`);
    const datas = await res.data.message;
    const paths = datas.map((data) => ({
        params: {
            blogid: `${data._id}`,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await axios.get(`http://localhost:4000/api/blog/${params.blogid}`);
    const res2 = await axios.get(`http://localhost:4000/api/blog`);
    const data = await res.data.message;
    const data2 = await res2.data.message.slice(1, 5);

    return {
        props: {
            blog: data,
            blogList: data2,
        },
    };
}

export default BlogDetails;
