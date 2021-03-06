/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/link-passhref */
import axios from 'axios';
import React, { useState } from 'react';
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import FooterCol from '../FooterColumn/FooterCol';
import style from './footer.module.scss';

const FooterDetailsOne = [
    { id: 1, title: 'About Us' },
    { id: 2, title: 'Privacy Policy' },
    { id: 3, title: 'Case Study' },
    { id: 4, title: 'Contact Us' },
    { id: 5, title: 'Terms & Conditions' },
];

const FooterDetailsTwo = [
    { id: 1, title: 'IT Solution' },
    { id: 2, title: 'Web Development' },
    { id: 3, title: 'Network Engineering' },
    { id: 4, title: 'App Optimization' },
    { id: 5, title: 'SEO Optimization' },
];

const FooterDetailsThree = [
    { id: 1, subId: 12, mainTitle: 'Phone', icon: <FaPhoneAlt />, title: '+8801710502483' },
    {
        id: 2,
        subId: 13,
        mainTitle: 'Email',
        icon: <FaEnvelope />,
        title: 'ashikurislam045@gmail.com',
    },
    {
        id: 3,
        subId: 14,
        mainTitle: 'Address',
        icon: <FaMapMarkerAlt />,
        title: '526 Street, Rangpur, Bangladesh',
    },
];

function Footer() {
    const [emailVal, setEmailVal] = useState('');

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        padding: '.25rem',
        timerProgressBar: true,
        width: '250px',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const handleChange = (e) => {
        setEmailVal(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/email', { email: emailVal });

            Toast.fire({
                icon: 'success',
                title: `Sign up successfully.`,
            });
            setEmailVal('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.footer_sec}>
            <div className={style.main_footer}>
                <div className={style.news_letter}>
                    <div className={style.news_letter_left}>
                        <h2>Sign Up Our Newsletter</h2>
                        <p>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
                    </div>

                    <div className={style.news_letter_right}>
                        <form onSubmit={handleSubmit}>
                            <input
                                className={style.inpp}
                                type="email"
                                placeholder="Enter your email.."
                                value={emailVal}
                                onChange={handleChange}
                            />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
                <hr />

                <div className={style.footer_col}>
                    <div className={style.footer_col1}>
                        <h4>About Us</h4>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci
                            nulla in minima, sequi fuga aliquid repudiandae eum optio qui recusandae
                            ex modi at. Consequatur?
                        </p>
                        <p>
                            <FaFacebook className={style.footer_col1_icon} />
                            <FaGoogle className={style.footer_col1_icon} />
                            <FaTwitter className={style.footer_col1_icon} />
                            <FaGithub className={style.footer_col1_icon} />
                            <FaLinkedin className={style.footer_col1_icon} />
                        </p>
                    </div>
                    <FooterCol header="Useful Links" footerDetails={FooterDetailsOne} />
                    <FooterCol header="Our Services" footerDetails={FooterDetailsTwo} />
                    <FooterCol header="Contact Us" footerDetails={FooterDetailsThree} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
