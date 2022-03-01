import React from 'react';
import { BiBitcoin, BiBookReader, BiCast, BiCode, BiCodeBlock, BiVector } from "react-icons/bi";
import ProvideItem from '../ProvideItem/ProvideItem';
import style from './provide.module.scss';

const providerDetails = [
    {
        id: 1,
        icon: <BiVector />,
        title: 'IT Solution',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },
    {
        id: 2,
        icon: <BiCode />,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },
    {
        id: 3,
        icon: <BiCodeBlock />,
        title: 'SEO Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },
    {
        id: 4,
        icon: <BiBitcoin />,
        title: 'Networking Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },
    {
        id: 5,
        icon: <BiBookReader />,
        title: 'App Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },
    {
        id: 6,
        icon: <BiCast />,
        title: 'Data Recovery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua'
    },

]

const Provide = () => {
  return (
    <div className={style.provide_sec}>
        <div className={style.provide_sec_header}>
            <h4>WHAT WE PROVIDE</h4>
            <h1>IT Solutions</h1>
        </div>

        <div className={style.provide_sec_main}>
            {providerDetails.map((details) => {
                return <ProvideItem key={details.id} details={details} />
            })}
        </div>

    </div>
  )
}

export default Provide