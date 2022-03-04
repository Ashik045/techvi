/* eslint-disable import/no-unresolved */
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
import blogimg5 from '../../images/blogimg5.jpg';
import style from '../../styles/blog.module.scss';

const DUMMU_BLOG = [
    {
        id: 1,
        image: blogimg5,
        author: 'Asad',
        date: '20 June 2021',
        title: 'Announcing Our New Smiles for Success Charity',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
    {
        id: 2,
        image: blogimg5,
        author: 'Mohan',
        date: '25 July 2020',
        title: 'Machine Learning Applications for Every Industry',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
    {
        id: 3,
        image: blogimg5,
        author: 'Abid',
        date: '08 June 2022',
        title: 'Planning for a Safe Return to the Workplace IT Solutions',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
    {
        id: 4,
        image: blogimg5,
        author: 'Ashik',
        date: '27 June 2021',
        title: '5 Technology Considerations for Office Relocations',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
    {
        id: 5,
        image: blogimg5,
        author: 'Alia',
        date: '3 December, 2019',
        title: 'Internal or outsourced IT: What’s the best choice?',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
    {
        id: 6,
        image: blogimg5,
        author: 'Devil',
        date: '25 July 2020',
        title: 'Machine Learning Applications for Every Industry',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt',
    },
];

function Blog() {
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
                    <div className={style.blog_main_header}>
                        <h5>BLOG & ARTICLE</h5>
                        <h1>Recent Blog</h1>
                    </div>

                    <BlogCom blogDetails={DUMMU_BLOG} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
