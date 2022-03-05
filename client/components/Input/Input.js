/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import style from './input.module.scss';

function Input(props) {
    const [focused, setFocused] = useState(false);
    const { onChange, errorMsg, ...inputProps } = props;

    const handleBlur = (e) => {
        setFocused(true);
    };
    return (
        <div className={style.input_div}>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleBlur}
                focused={focused.toString()}
            />
            <span>{errorMsg}</span>
        </div>
    );
}

export default Input;
