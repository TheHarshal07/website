import React from "react";
import "./Contactme.css";
import ContactInfo from "./ContactCradInfo/ContactInfo";
import Img from  "../assets/envelope-regular-24 (2).png"
import github from "../assets/github-logo-24 (1).png"
import ContactDetails from "./Contactdetails/ContactDetails";

const Contactme = () => {
  return (
    <section className="contact_container">
        <h2 className="contacthead">Contact Me</h2>
      <div className="contact_content">
        <div className="contact" style={{ flex: 1 }}>
        <ContactInfo
            urlInfo={Img}
            text = "harshalbhogal8@gmail.com"
            link = "mailto:harshalbhogal8@gmail.com"
        />
        <ContactInfo
            urlInfo={github}
            text = "https://github.com/TheHarshal07"
            link = "https://github.com/TheHarshal07"
        />
        </div>

        <div style={{ flex: 1 }}>
           <ContactDetails/>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
