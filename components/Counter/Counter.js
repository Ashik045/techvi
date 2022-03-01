import React from 'react';
import CountUp from 'react-countup';
import style from './counter.module.scss';

const Counter = () => {
    // const [counterSec, setCounterSec] = useState(false)

    if(typeof window !== "undefined") {
        function scrl() {
            if (window.scrollY > 2500) {
                console.log('scroll');
            }
        }
        window.addEventListener('scroll', scrl)
}
    

  return (
    <div className={style.counter_sec}>
        <div className={style.main_counter}>
            <div className={style.counter1}>
            <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                    <div>
                    <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
            </div>
        </div>
    </div>
  )
}

export default Counter