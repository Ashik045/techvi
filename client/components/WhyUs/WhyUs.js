import Image from 'next/image';
import React from 'react';
import topImg from '../../images/sideheader3-removebg-preview.png';
import topImg2 from '../../images/sideheader4.png';
import WhyItems from '../WhyItems/WhyItems';
import style from './whyus.module.scss';

const whyItemDetails1 = [
    { id: 1, title: 'Remote It Assistance' },
    { id: 2, title: 'Solving IT Problems' },
    { id: 3, title: 'Practice IT Management' },
    { id: 4, title: 'IT Security Services' },
    { id: 5, title: 'Managed IT Service' },
    { id: 6, title: 'Cloud Services' },
];

const whyItemDetails2 = [
    { id: 1, title: 'Protect your Business' },
    { id: 2, title: 'Network Security' },
    { id: 3, title: 'Data Security' },
    { id: 4, title: 'Small Business Owners' },
    { id: 5, title: 'Running your Business' },
    { id: 6, title: 'Network Monitoring' },
];

function WhyUs() {
    return (
        <div className={style.why_sec}>
            <div className={style.main_why}>
                <div className={style.top_sec}>
                    <div className={style.top_left}>
                        <Image src={topImg} alt="whyus" />
                    </div>
                    <div className={style.top_right}>
                        <h5>WHY CHOOSE US?</h5>
                        <h1>Safeguard your brand with Cyber-Security & IT Solutions</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <WhyItems whyDetails={whyItemDetails1} />
                    </div>
                </div>

                <div className={style.bottom_sec}>
                    <div className={style.bottom_left}>
                        <h5>WHY TRUST US?</h5>
                        <h1>Achieve digital transformation for your retail business services</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <WhyItems whyDetails={whyItemDetails2} />
                    </div>
                    <div className={style.bottom_right}>
                        <Image src={topImg2} alt="why uss" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
