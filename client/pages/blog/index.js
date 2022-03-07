/* eslint-disable import/no-unresolved */
import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCom from '../../components/BlogCom/BlogCom';
import Footer from '../../components/Footer/Footer';
import blogimg1 from '../../images/blogimg1.jpg';
import blogimg2 from '../../images/blogimg2.jpg';
import blogimg3 from '../../images/blogimg3.jpg';
import style from '../../styles/blog.module.scss';

function Blog({ BLOG_DATA }) {
    return (
        <>
            <div className={style.blog} id="top">
                <div className={style.blog_header}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        modules={[Autoplay, Pagination, Navigation]}
                        className={style.mySwiper}
                    >
                        <SwiperSlide>
                            <Image
                                src={blogimg2}
                                alt="blogImg"
                                className={style.blog_header_img}
                                // height={800}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={blogimg1}
                                alt="blogImg"
                                className={style.blog_header_img}
                                // height={800}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={blogimg3}
                                alt="blogImg"
                                className={style.blog_header_img}
                                // height={800}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={style.blog_main}>
                    <BlogCom blogDetails={BLOG_DATA} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:4000/api/blog');
    const dataMain = await res.data.message;
    return {
        props: {
            BLOG_DATA: dataMain,
        },
    };
}

export default Blog;
