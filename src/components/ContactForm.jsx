import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      // Отправка через EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Замените на ваш Service ID
        'YOUR_TEMPLATE_ID',    // Замените на ваш Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'YOUR_EMAIL', // Ваш email
        },
        'YOUR_PUBLIC_KEY'      // Замените на ваш Public Key
      );

      console.log('SUCCESS!', result.status, result.text);
      setStatusMessage('Сообщение успешно отправлено! Спасибо за обращение.');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('FAILED...', error);
      setStatusMessage('Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
          placeholder="Ваше имя"
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
          placeholder="your@email.com"
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Тема</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleFormChange}
          required
          placeholder="Тема сообщения"
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          required
          placeholder="Ваше сообщение..."
          disabled={isLoading}
        />
      </div>

      <button type="submit" className="form-submit" disabled={isLoading}>
        {isLoading ? 'Отправка...' : 'Отправить сообщение'}
      </button>

      {statusMessage && (
        <div className={`status-message ${statusMessage.includes('успешно') ? 'success' : 'error'}`}>
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;