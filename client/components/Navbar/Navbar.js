/* eslint-disable @next/next/link-passhref */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown, BiMenuAltRight, BiX } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import style from './navbar.module.scss';

function Navbar() {
    const [toggler, setToggler] = useState(false);
    const [srlHeight, setSrlHeight] = useState(false);

    if (typeof window !== 'undefined') {
        // eslint-disable-next-line func-names
        window.onscroll = function () {
            if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
                setSrlHeight(true);
            } else {
                setSrlHeight(false);
            }
        };
    }

    const handleToggle = () => {
        setToggler(!toggler);
    };
    return (
        <div
            className={style.navbar}
            id="mynav"
            style={{
                background: !srlHeight && 'none',
                backgroundColor: srlHeight && 'white',
                transition: 'all 0.4s ease',
            }}
        >
            <div className={style.brand}>
                <Link href="/">
                    <h3>Techvi</h3>
                </Link>
            </div>

            <div className={style.nav_menu}>
                <Link href="/">
                    <a href="#home">Home</a>
                </Link>

                <a href="#about">About Us</a>
                <Link href="/blog">
                    <a href="">Blog</a>
                </Link>
                <div className={style.dropdown}>
                    <a href="">
                        Pages <BiChevronDown className={style.down} />
                    </a>
                    <div className={style.dp_content}>
                        <a href="#about">About</a>
                        <Link href="/services">
                            <span>Services</span>
                        </Link>

                        <Link href="/notfound">
                            <span>404 page</span>
                        </Link>

                        <Link href="/contact">
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>

                <Link href="/services">
                    <a href="">Services</a>
                </Link>
                <Link href="/contact">
                    <a href="">Contact</a>
                </Link>
            </div>

            <div className={style.res_navbar}>
                {toggler ? (
                    <BiX onClick={handleToggle} className={style.toggle_btn} />
                ) : (
                    <BiMenuAltRight onClick={handleToggle} className={style.toggle_btn} />
                )}

                {toggler && (
                    <div className={style.res_nav_menu}>
                        <Link href="/">
                            <a href="#home" onClick={handleToggle}>
                                Home
                            </a>
                        </Link>
                        <a href="#about" onClick={handleToggle}>
                            About Us
                        </a>
                        <Link href="/blog">
                            <a href="" onClick={handleToggle}>
                                Blog
                            </a>
                        </Link>
                        <Link href="/services">
                            <a href="" onClick={handleToggle}>
                                Services
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a href="" onClick={handleToggle}>
                                Contact
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            {srlHeight && (
                <a href="#top">
                    <div className={style.to_top}>
                        <FaArrowUp className={style.to_top_icon} />
                    </div>
                </a>
            )}
        </div>
    );
}

export default Navbar;
