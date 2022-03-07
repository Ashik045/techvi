import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sideHeader1 from '../../images/sideheader1-removebg-preview.png';
import headerImg from '../../images/wave.svg';
import style from './header.module.scss';

function Header() {
    return (
        <div className={style.header} id="top">
            <div className={style.main_header}>
                <div className={style.left}>
                    <h1 className={style.headline}>
                        IT Solutions & Business <br /> Services Company
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe
                        corrupti quia modi! Voluptatem quaerat voluptatibus asperiores dolorum iusto
                        tempora.
                    </p>
                    <div className={style.header_btn_grp}>
                        <button type="button" className={style.header_btn}>
                            <a href="#about" className={style.rounded}>
                                {' '}
                                About Us
                            </a>
                        </button>
                        <Link href="/contact" passHref>
                            <button type="button" className={style.header_btn}>
                                <span className={style.rounded}> Contact Us</span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={style.right}>
                    <Image src={sideHeader1} alt="head" />
                </div>
            </div>

            <div className={style.header_sec}>
                <Image alt="headd" src={headerImg} />
            </div>
        </div>
    );
}

export default Header;
