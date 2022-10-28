import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fekmup', 'template_jf4n07l', form.current, '9IsH8DNDnEbZ-QxUJ')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
     <div className="contact_head">
      <h1>Contact Me</h1>
      <h4>Get in Touch</h4>
    </div>
    <div className="container contact__container">
      <form ref={form} onSubmit={sendEmail}> 
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

    </div>
    </section>
  )
}

export default Contact
