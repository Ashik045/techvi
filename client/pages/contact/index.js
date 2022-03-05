import React from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import style from '../../styles/contact.module.scss';

const contactDetail = [
    {
        id: 1,
        title: 'USA Headquarter',
        description:
            '304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.',
        phone: '+8801721212121',
        email: 'demoone@gmail.com',
    },
    {
        id: 2,
        title: 'Panama Office',
        description:
            '1540 Pecks Ridge Tilton Rd Flemingsburg, Kentucky(KY), 4104188 Fulton Street Blackwood, NJ 08012, London.',
        phone: '+880172000021',
        email: 'demotwo@gmail.com',
    },
    {
        id: 3,
        title: 'New York Office',
        description:
            '103 Richard Ave Ashville, Ohio, Water Mill,3468 16th Hwy Pangburn, Arkansas(AR), Charolais Ashville, Virginia',
        phone: '+880177712121',
        email: 'demothree@gmail.com',
    },
];

function Contact() {
    return (
        <div className={style.contact} id="top">
            <div className={style.contact_main_header}>
                <h5>Contact Info</h5>
                <h1>Find Us</h1>
            </div>

            <div className={style.contact_main}>
                <div className={style.contact_main_card}>
                    {contactDetail.map((detail) => (
                        <ContactCard key={detail.id} cardDetails={detail} />
                    ))}
                </div>

                <div className={style.contact_main_header2}>
                    <h5>Contact Us</h5>
                    <h1>Lets Talk</h1>
                </div>

                <ContactForm />
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68374.50364186596!2d89.22147193114522!3d25.754301693742065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1646373704093!5m2!1sen!2sbd"
                width="100%"
                height="450"
                title="none"
                style={{ bordar: 'none', marginBottom: '-2px', marginTop: '30px' }}
                allowFullScreen="100%"
                loading="lazy"
            />
            <Footer />
        </div>
    );
}

export default Contact;
