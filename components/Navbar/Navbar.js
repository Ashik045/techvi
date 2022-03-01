import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown, BiMenuAltRight, BiX } from "react-icons/bi";
import style from './navbar.module.scss';

const Navbar = () => {
    const [toggler, setToggler] = useState(false)

    const handleToggle = () => {
        setToggler(!toggler)
    }
  return (
    <div className={style.navbar}>
        <div className={style.brand}>
            <Link href={'/'}>
                <h3>Techvi</h3>
            </Link>
        </div>

        <div className={style.nav_menu}>
            <a href="">Home</a>
            <a href="#about">About Us</a>
            <a href="">Services</a>
            <div className={style.dropdown}>
                <a href="" >Pages <BiChevronDown className={style.down}/></a>
                    <div className={style.dp_content}>
                        <span>About</span>
                        <span>Services</span>
                        <span>404 page</span>
                        <span>Contact</span>
                    </div>
            </div>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>

        <div className={style.res_navbar}>
            {toggler ? <BiX onClick={handleToggle} className={style.toggle_btn} /> : <BiMenuAltRight onClick={handleToggle} className={style.toggle_btn} />}

            {toggler && (
                <div className={style.res_nav_menu}>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Pages</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar