import { useState } from "react";
import { Formik, Field, Form, } from 'formik';

import mobilePicture from './img/mobilePicture.svg';
import mailPicture from './img/mailPicture.svg';
import instagramLogo from '../../../footer/img/instagramLogo.png';
import facebookLogo from '../../../footer/img/facebookLogo.png';
import youtubeLogo from '../../../footer/img/youtubeLogo.png';
import linkedinLogo from '../../../footer/img/linkedinLogo.png';

import './contactsPage.scss';

const ContactsPage = () => {

    const handleSubmit = () => {

    }

    return (
        <div className="contacts">
            <h1>Our contacts</h1>
            <h3>Contact us for all your questions</h3>
            <div className="contacts__means">
                <div>
                    <img src={mobilePicture} alt="mobile" />
                    <p>+7-964-365-7110</p>
                </div>
                <div>
                    <img src={mailPicture} alt="mail" />
                    <a href="mailto:info@aio.house">info@aio.house</a>
                </div>
            </div>

            <div className="contacts__media">
                <h2>Our social networks</h2>
                <div>
                    <a href=""><img src={instagramLogo} alt="instagram" /></a>
                    <a href=""><img src={facebookLogo} alt="facebook" /></a>
                    <a href=""><img src={youtubeLogo} alt="youtube" /></a>
                    <a href=""><img src={linkedinLogo} alt="linkedin" /></a>
                </div>
            </div>

            <div className="contacts__form">
                <h2>Leave your contacts so that we can contact you</h2>
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        telephone: '',
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form className="contacts__form-wrapper">   
                        <Field 
                            className="contacts__form-input" 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your email" />
                    
                        <Field
                            className="contacts__form-input"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            type="text"
                        />        

                        <Field
                            className="contacts__form-input"
                            id="telephone"
                            name="telephone"
                            placeholder="Your telephone"
                            type="tel"
                        />
                       
                        <div className="contacts__form-button">
                            <button type="submit">Send</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default ContactsPage;