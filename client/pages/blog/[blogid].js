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
import blogimg4 from '../../images/about2.jpg';
import blogimg7 from '../../images/blogimg7.jpg';
import style from '../../styles/blogdetails.module.scss';

const POPULAR_POSTS = [
    {
        id: 1,
        image: blogimg4,
        date: '20 June 2021',
        title: 'Announcing Our New Smiles for Success Charity',
    },
    {
        id: 2,
        image: blogimg4,
        date: '25 July 2020',
        title: 'Machine Learning Applications for Every Industry',
    },
    {
        id: 3,
        image: blogimg4,
        date: '3 December, 2019',
        title: 'Internal or outsourced IT: What’s the best choice?',
    },
    {
        id: 4,
        image: blogimg4,
        date: '27 June 2021',
        title: '5 Technology Considerations for Office Relocations',
    },
];

function BlogDetails() {
    return (
        <div className={style.blog_details}>
            <div className={style.blog_details_main}>
                <div className={style.blog_left}>
                    <Image src={blogimg7} alt="detail" />
                    <div className={style.author1}>
                        <p>
                            <FaUserAlt /> Ashik
                        </p>
                        <p>
                            <FaCalendarWeek /> 27 July 2021
                        </p>
                    </div>

                    <h2>5 Technology Considerations for Office Relocations</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi aliquip. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi aliquip. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim.
                    </p>

                    <div className={style.author2}>
                        <p>
                            <b>Tag:</b> Solutions, Guide
                        </p>
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
                        {POPULAR_POSTS.map((posts) => (
                            <PopularPost key={posts.id} postDetail={posts} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
