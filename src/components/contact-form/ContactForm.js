import React from 'react';
import * as styles from './ContactForm.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import LinkedInIcon from '../../images/linkedin.svg';
import InstagramIcon from '../../images/instagram.svg';
import Button from '../button/Button';


const ContactForm = () => {
    const handleContactFormSubmit = (e) => {
        e.preventDefault();

        // Here, you can perform actions with the formData, such as sending it to a server or displaying it.
        // For example, you can send it to an API using Axios or fetch:
        // axios.post('/api/contact', formData)
        //   .then((response) => {
        //     console.log('Form submitted successfully', response.data);
        //   })
        //   .catch((error) => {
        //     console.error('Form submission failed', error);
        //   });

        // For this example, let's just log the form data to the console.
        console.log('Form submitted:');
    };
    return (
        <div className={styles.contactFormContainer}>
            <div className={styles.flexStart}>
                {/* TSW Logo */}
                <StaticImage src="../../images/tsw.png" alt="TSW Logo" width={150} />
            </div>
            <div className={`${styles.flexStart} ${styles.connectText}`}>
                <p>
                    Let's Connect
                </p>
            </div>
            <div className={styles.contactInfo}>
                {/* TSW Phone */}
                <div className={styles.contactItem}>
                    <span className={styles.boldText}>Phone</span>
                    <p>+917043044592</p>
                </div>
                {/* TSW Email */}
                <div className={styles.contactItem}>
                    <span className={styles.boldText}>Email</span>
                    <p>twinstudioworks@gmail.com</p>
                </div>
                {/* TSW Social Media */}
                <div className={styles.contactItem}>
                    <span>Social Media</span>
                    <div>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <form className={styles.contactForm}>
                <div className={styles.formRow}>
                    {/* Name */}
                    <div className={styles.formInput}>
                        <label htmlFor="name" className={styles.boldText}>Name*</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    {/* Contact Number */}
                    <div className={styles.formInput}>
                        <label htmlFor="contactNumber" className={styles.boldText}>Contact Number*</label>
                        <input type="tel" id="contactNumber" name="contactNumber" required />
                    </div>
                    {/* Email */}
                    <div className={styles.formInput}>
                        <label htmlFor="email" className={styles.boldText}>Email*</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
                <div className={styles.formRowMessage}>
                    <label htmlFor="message" className={styles.boldText}>Message*</label>
                    <textarea id="message" name="message" rows="6" required />
                </div>
                {/* Submit Button */}
                <Button text="Submit" onClick={handleContactFormSubmit} />
            </form>
        </div>
    );
};

export default ContactForm;
