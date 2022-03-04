import React, { useState } from 'react';
import Input from '../Input/Input';
import style from './contactform.module.scss';

function ContactForm() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
    });
    const [msgVal, setmsgVal] = useState('');

    const INP_DETAILS = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Name',
            errorMsg: 'Name field is required!',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Your Email..',
            errorMsg: 'Provide a valid email address!',
            required: true,
        },
        {
            id: 3,
            name: 'phone',
            type: 'text',
            placeholder: 'Phone Number',
            errorMsg: 'Phone num is required!',
            required: true,
        },
        {
            id: 4,
            name: 'subject',
            type: 'text',
            placeholder: 'Subject',
            errorMsg: 'Subject is required!',
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log(values, msgVal);
    };

    const handleCHange = (e) => {
        setmsgVal(e.target.value);
    };

    return (
        <div className={style.contact_form}>
            <form className={style.main_form} onSubmit={handleClick}>
                <div className={style.inputs}>
                    {INP_DETAILS.map((inpDetail) => (
                        <Input
                            key={inpDetail.id}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...inpDetail}
                            value={values[inpDetail.name]}
                            onChange={onChange}
                        />
                    ))}
                </div>

                <textarea
                    name="textarea"
                    cols="70"
                    rows="9"
                    placeholder="Your message"
                    value={msgVal}
                    onChange={handleCHange}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default ContactForm;
