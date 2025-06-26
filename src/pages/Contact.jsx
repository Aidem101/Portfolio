import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Свяжитесь со мной</h2>
      <a href="mailto:vania2003433616@gmail.com" className="contact-email">
        vania2003433616@gmail.com
      </a>

      <div className="form-divider">
        <span>или напишите через форму</span>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;