import React from 'react'
import "./ContactDetails.css"

const ContactDetails = () => {
  return (
    <section className='contact_details'>
        <form action="">
            <div className='name_container'>
                <input type="text" placeholder='First Name' name="Firstname" />
                <input type="text" placeholder='Last Name' name="Lastname" />
            </div>

            <input type="text" placeholder='Email' name="email" />
            <textarea type="text" name="message" placeholder='Message' ></textarea>

            <button>SEND</button>
        </form>
    </section>
  )
}

export default ContactDetails
