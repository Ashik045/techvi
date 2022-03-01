import ProgressBar from "@ramonak/react-progress-bar";
import Image from 'next/image';
import React from 'react';
import itImg from '../../images/about1.jpg';
import style from './about.module.scss';

const About = () => {
  return (
    <div id='about' className={style.about_sec}>
        <div id='about' className={style.about_sec_main}>
            <div className={style.left}>
                <h5>ABOUT OUR COMPANY</h5>
                <h1>Providing your business with a quality IT service is our passion.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud</p>

                <div className={style.progress}>
                    <div className={style.progres}>
                        <p>IT Consulting</p>
                        <ProgressBar bgColor="#7b68ee" animateOnRender={true} height="15px" completed={75} />
                    </div>

                    <div className={style.progres}>
                        <p>Virtual Workstation</p>
                        <ProgressBar bgColor="#7b68ee" animateOnRender={true}  height="15px" completed={90} />
                    </div>

                    <div className={style.progres}>
                        <p>Managed IT Service</p>
                        <ProgressBar bgColor="#7b68ee" animateOnRender={true} height="15px" completed={85} />
                    </div>
                </div>
                <button className={style.learn_more}>Learn More</button>
            </div>
            
            <div className={style.right}>
                <Image src={itImg} className={style.right_img} height={700} />
            </div>

        </div>
    </div>
  )
}

export default About