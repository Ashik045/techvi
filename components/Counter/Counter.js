import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import style from './counter.module.scss';

function Counter() {
    return (
        <div className={style.counter_sec}>
            <div className={style.main_counter}>
                <VisibilitySensor partialVisibility offset={{ top: 20 }}>
                    {({ isVisible }) => (
                        <div className={style.counters}>
                            <div style={{ height: 100 }} className={style.counter}>
                                {isVisible ? (
                                    <CountUp end={27} suffix="+" className={style.counter_header} />
                                ) : null}
                                <p>Years Helping Business</p>
                            </div>

                            <div style={{ height: 100 }} className={style.counter}>
                                {isVisible ? (
                                    <CountUp
                                        end={500}
                                        suffix="+"
                                        className={style.counter_header}
                                    />
                                ) : null}
                                <p>Employees</p>
                            </div>

                            <div style={{ height: 100 }} className={style.counter}>
                                {isVisible ? (
                                    <CountUp end={20} suffix="M" className={style.counter_header} />
                                ) : null}
                                <p>Complete Projects</p>
                            </div>

                            <div style={{ height: 100 }} className={style.counter}>
                                {isVisible ? (
                                    <CountUp end={90} suffix="K" className={style.counter_header} />
                                ) : null}
                                <p>5 Star Rating</p>
                            </div>
                        </div>
                    )}
                </VisibilitySensor>
            </div>
        </div>
    );
}

export default Counter;
