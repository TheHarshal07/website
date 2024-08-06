import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ urlInfo, text, link }) => {
  return (
    <section className="Contact_Card_info">
      <a href={link} target="_blank">
        <div className="icon">
          <img src={urlInfo} alt="mail" />
        </div>

        <p>{text}</p>
      </a>
    </section>
  );
};

export default ContactInfo;
