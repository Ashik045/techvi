import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
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
    const form = useRef();

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

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        padding: '.25rem',
        timerProgressBar: true,
        width: '250px',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const handleClick = (e) => {
        e.preventDefault();
        Toast.fire({
            icon: 'success',
            title: `Hello ${values.name}. We received your information.`,
        });

        emailjs.sendForm('service_p9nenhd', 'template_f4as9xe', e.target, 'mqlVmI9Fm3eB-SSCf').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );

        setValues({
            name: '',
            email: '',
            phone: '',
            subject: '',
        });
        setmsgVal('');
    };

    const handleCHange = (e) => {
        setmsgVal(e.target.value);
    };

    return (
        <div className={style.contact_form}>
            <form className={style.main_form} ref={form} onSubmit={handleClick}>
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
