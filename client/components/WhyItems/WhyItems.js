import React from 'react'
import style from './WhyItems.module.scss'

const WhyItems = ({whyDetails}) => {
  return (
    <div className={style.whyItems}>
        {whyDetails.map((details) => {
           return (
            <div key={details.id} className={style.whyItem}>
                {details.title}
            </div>
           )
        })}
    </div>
  )
}

export default WhyItems