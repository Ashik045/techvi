import React from 'react';
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import boy3 from '../../images/boy1.jpg';
import boy2 from '../../images/boy2.jpg';
import boy1 from '../../images/boy3.jpg';
import girl1 from '../../images/woman1.jpg';
import girl2 from '../../images/woman2.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';
import style from './review.module.scss';

const reviewDetails = [
    {
        id: 1,
        image: boy1,
        name: 'Stevie Smith',
        title: 'Project Manager',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis, voluptatum itaque unde delectus ducimus quas quidem numquam molestiae nam.',
    },
    {
        id: 2,
        image: girl1,
        name: 'Zahra Bnit',
        title: 'Designer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis, voluptatum itaque unde delectus ducimus quas quidem numquam molestiae nam.',
    },
    {
        id: 3,
        image: girl2,
        name: 'Julia Ide',
        title: 'Buisness Man',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis, voluptatum itaque unde delectus ducimus quas quidem numquam molestiae nam.',
    },
    {
        id: 4,
        image: boy2,
        name: 'Obul Deo',
        title: 'Project Manager',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis, voluptatum itaque unde delectus ducimus quas quidem numquam molestiae nam.',
    },
    {
        id: 5,
        image: boy3,
        name: 'Al-Obeid',
        title: 'Buisness Man',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis, voluptatum itaque unde delectus ducimus quas quidem numquam molestiae nam.',
    },
];

function Review() {
    return (
        <div className={style.review_sec}>
            <div className={style.review_header}>
                <h5>TESTIMONIAL</h5>
                <h1>What Our Client Say</h1>
            </div>

            <div className={style.review_main}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className={style.mySwiper}
                >
                    {reviewDetails.map((details) => (
                        <SwiperSlide key={details.id} className={style.swiper}>
                            <ReviewCard details={details} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Review;
