import React, { useRef, useState } from 'react';
import './ContactDetails.css';
import emailjs from '@emailjs/browser';
import Pop from '../Popup/success';
import Fail from "../Popup/failmsg"

const ContactDetails = () => {
  const [Popup, setpopUp] = useState(false);

  const [Failed, setFailed] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setpopUp(true);
        setInterval(() =>{
          setpopUp(false);
        },5000)
      },
      (error) => {
        console.log('FAILED...', error.text);
        setFailed(true);
        setInterval(() =>{
          setFailed(false);
        },5000)
      },
    );
  };

  return (
    <>
      <section className='contact_details'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='name_container'>
            <input type="text" placeholder='First Name' name="user_name" required/>
            <input type="text" placeholder='Last Name' name="Lastname" required/>
          </div>

          <input type="text" placeholder='Email' name="user_email" required />
          <textarea type="text" name="message" placeholder='Message' required></textarea>

          <input  className='button' type="submit" value="Send" />
        </form>
      </section>
      {Popup && <Pop  />}
      {Failed && <Fail /> }
    </>
  );
};

export default ContactDetails;
